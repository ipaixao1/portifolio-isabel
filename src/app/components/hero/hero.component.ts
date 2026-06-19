import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.createSpores();
  }

  private createSpores(): void {
    const container = document.getElementById('spores');
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const s = document.createElement('div');
      s.className = 'spore';
      const size = Math.random() * 3 + 1;
      s.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        top:${60 + Math.random() * 35}%;
        animation-duration:${Math.random() * 12 + 8}s;
        animation-delay:${Math.random() * 8}s;
        opacity:0;
      `;
      container.appendChild(s);
    }
  }
}
