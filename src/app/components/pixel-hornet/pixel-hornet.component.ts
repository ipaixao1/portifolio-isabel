import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pixel-hornet',
  standalone: true,
  templateUrl: './pixel-hornet.component.html',
  styleUrls: ['./pixel-hornet.component.scss'],
})
export class PixelHornetComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pixelCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private rafId = 0;
  private frame = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.animate();
  }

  private drawHornet(ctx: CanvasRenderingContext2D, ox: number, oy: number, S: number): void {
    const C = {
      mask:      '#E0D2BA',
      mask2:     '#C8BAA2',
      eye:       '#060209',
      eyeGlow:   '#8B0A1F',
      cape:      '#8B0A1F',
      cape2:     '#6B0A16',
      cape3:     '#C8102E',
      needle:    '#C8C0A0',
      horn:      '#D0C4AE',
      body:      '#0C0410',
      ornament:  '#C8A44A',
    };

    const px = (x: number, y: number, c: string) => {
      ctx.fillStyle = c;
      ctx.fillRect(ox + x * S, oy + y * S, S, S);
    };

    // Horns
    [[12,0],[13,0],[13,1],[12,1],[11,2],[10,3],[10,4]].forEach(([x,y]) => px(x, y, C.horn));
    [[18,0],[17,0],[17,1],[18,1],[19,2],[20,3],[20,4]].forEach(([x,y]) => px(x, y, C.horn));

    // Mask
    for (let y = 4; y <= 14; y++) {
      for (let x = 10; x <= 21; x++) {
        const dx = x - 15.5, dy = y - 9;
        if (dx*dx/30 + dy*dy/28 <= 1) px(x, y, y < 7 ? C.mask2 : C.mask);
      }
    }
    [[10,9],[10,10],[10,11],[11,12],[12,13],[13,14],[21,9],[21,10],[21,11],[20,12],[19,13],[18,14]].forEach(([x,y]) => px(x, y, C.mask2));

    // Eyes
    [[13,9],[14,9],[13,10],[14,10]].forEach(([x,y]) => px(x, y, C.eye));
    [[17,9],[18,9],[17,10],[18,10]].forEach(([x,y]) => px(x, y, C.eye));
    px(13, 9, C.eyeGlow); px(17, 9, C.eyeGlow);

    // Body
    for (let y = 15; y <= 22; y++) for (let x = 12; x <= 19; x++) px(x, y, C.body);

    // Cape
    for (let y = 17; y <= 32; y++) {
      const spread = (y - 17) * 0.8;
      for (let x = Math.floor(15.5 - spread - 3); x <= Math.ceil(15.5 + spread + 3); x++) {
        px(x, y, x < 15.5 ? C.cape3 : C.cape2);
      }
    }
    for (let y = 17; y <= 30; y++) px(14, y, C.cape);

    // Needle
    for (let i = 0; i <= 8; i++) px(Math.round(12 - i), Math.round(15 + i * 0.7), C.needle);
    px(4, 21, C.needle); px(3, 22, C.needle);

    // Ornament
    px(15, 15, C.ornament); px(16, 15, C.ornament);
  }

  private animate(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx    = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;

    const ox = 48, oy = 14, S = 2;

    const threads = [
      { x: 12, y: 16, len: 6,  color: 'rgba(216,202,180,0.6)' },
      { x: 19, y: 18, len: 5,  color: 'rgba(216,202,180,0.6)' },
      { x: 11, y: 22, len: 4,  color: 'rgba(200,16,46,0.6)' },
    ];

    const draw = () => {
      this.frame++;
      const bob = Math.round(Math.sin(this.frame * 0.05) * 1.5);

      ctx.clearRect(0, 0, 128, 128);
      ctx.save();
      ctx.translate(0, bob);
      this.drawHornet(ctx, ox, oy, S);
      ctx.restore();

      // Silk threads
      threads.forEach((t, i) => {
        const sway = Math.sin(this.frame * 0.04 + i) * 1.5;
        ctx.beginPath();
        ctx.moveTo(ox + t.x * S, oy + t.y * S + bob);
        ctx.quadraticCurveTo(
          ox + t.x * S + sway * S, oy + (t.y + t.len / 2) * S + bob,
          ox + (t.x + sway) * S,   oy + (t.y + t.len) * S
        );
        ctx.strokeStyle = t.color;
        ctx.lineWidth   = 0.8;
        ctx.stroke();
      });

      this.rafId = requestAnimationFrame(draw);
    };

    draw();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }
}
