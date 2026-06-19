import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p class="footer-text">© 2026 ISABEL.PAIXAO — TECIDO COM PROPÓSITO, LINHA POR LINHA</p>
      <div class="footer-gem"></div>
      <p class="footer-text">HOLLOW KNIGHT FAN ◈ ADS</p>
    </footer>
  `,
  styles: [`
    footer {
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--ui-border);
      position: relative;
      z-index: 2;
      background: var(--bg);
    }
    .footer-text {
      font-family: var(--ff-pixel);
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      color: var(--cream2);
      opacity: 0.5;
    }
    .footer-gem {
      width: 10px; height: 10px;
      background: var(--red);
      opacity: 0.4;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      animation: dotPulse 3s infinite;
    }
    @keyframes dotPulse {
      0%, 100% { opacity: 0.2; transform: scale(0.8); }
      50%       { opacity: 0.6; transform: scale(1.2); }
    }
    @media (max-width: 600px) {
      footer { flex-direction: column; gap: 0.5rem; text-align: center; }
    }
  `],
})
export class FooterComponent {}
