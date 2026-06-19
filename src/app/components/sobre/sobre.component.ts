import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PixelHornetComponent } from '../pixel-hornet/pixel-hornet.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [PixelHornetComponent],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.initNodeObserver();
  }

  private initNodeObserver(): void {
    const section = document.getElementById('sobre');
    const ring    = document.getElementById('node-sobre');
    if (!section || !ring) return;

    this.observer = new IntersectionObserver(
      ([entry]) => ring.classList.toggle('active', entry.isIntersecting),
      { threshold: 0.2 }
    );
    this.observer.observe(section);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
