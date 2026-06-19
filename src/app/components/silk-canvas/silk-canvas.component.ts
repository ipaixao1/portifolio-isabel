import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Point { x: number; y: number; }

class SilkThread {
  x = 0; y = 0;
  vx = 0; vy = 0;
  pts: Point[] = [];
  life = 0;
  maxLife = 0;
  segCount = 0;
  rgb = '';
  baseAlpha = 0;
  width = 0;
  ox = 0; oy = 0;
  private W: number;
  private H: number;

  constructor(private i: number, W: number, H: number) {
    this.W = W; this.H = H;
    this.reset();
  }

  updateSize(W: number, H: number) { this.W = W; this.H = H; }

  reset(): void {
    const side = Math.floor(Math.random() * 4);
    if (side === 0)      { this.ox = Math.random() * this.W; this.oy = 0; }
    else if (side === 1) { this.ox = this.W; this.oy = Math.random() * this.H; }
    else if (side === 2) { this.ox = Math.random() * this.W; this.oy = this.H; }
    else                 { this.ox = 0; this.oy = Math.random() * this.H; }
    this.x = this.ox; this.y = this.oy;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2;
    this.segCount = Math.floor(Math.random() * 22 + 14);
    this.life = 0;
    this.maxLife = Math.random() * 600 + 300;
    const t = Math.random();
    if (t < 0.22)      this.rgb = '200,16,46';
    else if (t < 0.3)  this.rgb = '123,111,200';
    else               this.rgb = '216,202,180';
    this.baseAlpha = Math.random() * 0.28 + 0.1;
    this.width = Math.random() * 0.7 + 0.3;
    this.pts = Array.from({ length: this.segCount }, () => ({ x: this.x, y: this.y }));
  }

  update(mouseX: number, mouseY: number): void {
    this.life++;
    const dx = mouseX - this.x, dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const force = Math.min(300, dist) / dist;
    if (dist < 350) {
      this.vx += (dx / dist) * 0.045 * force;
      this.vy += (dy / dist) * 0.045 * force;
    }
    this.vx += Math.sin(this.life * 0.02 + this.i) * 0.008;
    this.vy += Math.cos(this.life * 0.015 + this.i) * 0.006;
    this.vx *= 0.97; this.vy *= 0.97;
    this.x += this.vx; this.y += this.vy;
    for (let i = this.pts.length - 1; i > 0; i--) {
      this.pts[i].x = this.pts[i - 1].x;
      this.pts[i].y = this.pts[i - 1].y;
    }
    this.pts[0].x = this.x; this.pts[0].y = this.y;
    if (this.life > this.maxLife || this.x < -100 || this.x > this.W + 100 || this.y < -100 || this.y > this.H + 100) {
      this.reset();
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.pts.length < 2) return;
    const fadeIn  = Math.min(1, this.life / 60);
    const fadeOut = Math.min(1, (this.maxLife - this.life) / 60);
    const alpha   = this.baseAlpha * fadeIn * fadeOut;
    ctx.beginPath();
    ctx.moveTo(this.pts[0].x, this.pts[0].y);
    for (let i = 1; i < this.pts.length; i++) {
      const mx = (this.pts[i - 1].x + this.pts[i].x) / 2;
      const my = (this.pts[i - 1].y + this.pts[i].y) / 2;
      ctx.quadraticCurveTo(this.pts[i - 1].x, this.pts[i - 1].y, mx, my);
    }
    const g = ctx.createLinearGradient(this.pts[0].x, this.pts[0].y, this.pts[this.pts.length - 1].x, this.pts[this.pts.length - 1].y);
    g.addColorStop(0,   `rgba(${this.rgb},${alpha})`);
    g.addColorStop(0.5, `rgba(${this.rgb},${alpha * 1.6})`);
    g.addColorStop(1,   `rgba(${this.rgb},0)`);
    ctx.strokeStyle = g;
    ctx.lineWidth   = this.width;
    ctx.stroke();
  }
}

class Spark {
  x = 0; y = 0;
  vx = 0; vy = 0;
  life = 0; maxLife = 0; r = 0;

  constructor(private mouseX: () => number, private mouseY: () => number) { this.reset(); }

  reset(): void {
    const a = Math.random() * Math.PI * 2;
    const sp = Math.random() * 2.5 + 0.5;
    this.x = this.mouseX(); this.y = this.mouseY();
    this.vx = Math.cos(a) * sp; this.vy = Math.sin(a) * sp;
    this.life = 0; this.maxLife = Math.floor(Math.random() * 20 + 10);
    this.r = Math.random() * 1.5 + 0.5;
  }

  update(): void {
    this.life++;
    this.vx *= 0.93; this.vy *= 0.93;
    this.x += this.vx; this.y += this.vy;
    if (this.life > this.maxLife) this.reset();
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const a = 1 - this.life / this.maxLife;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = Math.random() < 0.3
      ? `rgba(200,16,46,${a * 0.9})`
      : `rgba(216,202,180,${a * 0.7})`;
    ctx.fill();
  }
}

@Component({
  selector: 'app-silk-canvas',
  standalone: true,
  template: `<canvas #silkCanvas id="silk-canvas"></canvas>`,
  styles: [`
    #silk-canvas {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      opacity: 0.55;
    }
  `],
})
export class SilkCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('silkCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private W = 0; private H = 0;
  private mouseX = 0; private mouseY = 0;
  private threads: SilkThread[] = [];
  private sparks: Spark[] = [];
  private rafId = 0;
  private onMouseMove!: (e: MouseEvent) => void;
  private onTouch!: (e: TouchEvent) => void;
  private onResize!: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize(canvas);

    this.onResize = () => {
      this.resize(canvas);
      this.threads.forEach(t => t.updateSize(this.W, this.H));
    };
    this.onMouseMove = (e: MouseEvent) => { this.mouseX = e.clientX; this.mouseY = e.clientY; };
    this.onTouch = (e: TouchEvent) => { this.mouseX = e.touches[0].clientX; this.mouseY = e.touches[0].clientY; };

    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('touchmove', this.onTouch, { passive: true });

    this.threads = Array.from({ length: 18 }, (_, i) => new SilkThread(i, this.W, this.H));
    this.sparks  = Array.from({ length: 12 }, () => new Spark(() => this.mouseX, () => this.mouseY));

    this.loop();
  }

  private resize(canvas: HTMLCanvasElement): void {
    this.W = canvas.width  = window.innerWidth;
    this.H = canvas.height = window.innerHeight;
  }

  private loop(): void {
    this.ctx.clearRect(0, 0, this.W, this.H);
    this.threads.forEach(t => { t.update(this.mouseX, this.mouseY); t.draw(this.ctx); });
    this.sparks.forEach(s  => { s.update(); s.draw(this.ctx); });
    this.rafId = requestAnimationFrame(() => this.loop());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouch);
  }
}
