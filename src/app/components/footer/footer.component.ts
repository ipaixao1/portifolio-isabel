import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p class="footer-text">© 2026 ISABEL.PAIXÃO — TECIDO COM PROPÓSITO, LINHA POR LINHA</p>
      <div class="footer-gem"></div>
      <p class="footer-text footer-right">HOLLOW KNIGHT FAN ◈ ADS</p>
    </footer>
  `,
  styles: [`
    footer {
      padding: 1.2rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.75rem;
      border-top: 1px solid var(--ui-border);
      position: relative;
      z-index: 2;
      background: var(--bg);
      text-align: center;
    }
    @media (min-width: 600px) {
      footer {
        justify-content: space-between;
        padding: 1.5rem 2rem;
      }
    }
    .footer-text {
      font-family: var(--ff-pixel);
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      color: var(--cream2);
      opacity: 0.5;
    }
    .footer-right { display: none; }
    @media (min-width: 600px) { .footer-right { display: block; } }
    .footer-gem {
      width: 10px; height: 10px;
      background: var(--red);
      opacity: 0.4;
      clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%);
      animation: dotPulse 3s infinite;
      flex-shrink: 0;
    }
    @keyframes dotPulse {
      0%,100% { opacity: 0.2; transform: scale(0.8); }
      50%      { opacity: 0.6; transform: scale(1.2); }
    }
  `],
})
export class FooterComponent {}
