import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements OnInit, OnDestroy {
  private cx = 0;
  private cy = 0;
  private mx = 0;
  private my = 0;
  private rafId = 0;
  private cursorEl!: HTMLElement;
  private dotEl!: HTMLElement;
  private onMouseMove!: (e: MouseEvent) => void;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.cursorEl = document.getElementById('cursor')!;
    this.dotEl    = document.getElementById('cursor-dot')!;

    this.onMouseMove = (e: MouseEvent) => {
      this.mx = e.clientX;
      this.my = e.clientY;
      this.dotEl.style.left = this.mx + 'px';
      this.dotEl.style.top  = this.my + 'px';
    };

    window.addEventListener('mousemove', this.onMouseMove);

    // Add scale effect to interactive elements
    document.querySelectorAll('a, button, .contact-card, .proj-card, .skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursorEl.style.transform = 'translate(-50%,-50%) rotate(45deg) scale(1.8)';
        this.cursorEl.style.borderColor = 'var(--cream)';
      });
      el.addEventListener('mouseleave', () => {
        this.cursorEl.style.transform = 'translate(-50%,-50%) rotate(45deg) scale(1)';
        this.cursorEl.style.borderColor = 'var(--red)';
      });
    });

    this.animateCursor();
  }

  private animateCursor(): void {
    this.cx += (this.mx - this.cx) * 0.18;
    this.cy += (this.my - this.cy) * 0.18;
    if (this.cursorEl) {
      this.cursorEl.style.left = this.cx + 'px';
      this.cursorEl.style.top  = this.cy + 'px';
    }
    this.rafId = requestAnimationFrame(() => this.animateCursor());
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    cancelAnimationFrame(this.rafId);
  }
}
