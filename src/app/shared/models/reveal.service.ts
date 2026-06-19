import { Injectable, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RevealService implements OnDestroy {
  private observer!: IntersectionObserver;

  init(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            this.observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
