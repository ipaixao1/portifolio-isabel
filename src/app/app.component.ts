import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CursorComponent }     from './components/cursor/cursor.component';
import { SilkCanvasComponent } from './components/silk-canvas/silk-canvas.component';
import { HudComponent }        from './components/hud/hud.component';
import { HeroComponent }       from './components/hero/hero.component';
import { SobreComponent }      from './components/sobre/sobre.component';
import { SkillsComponent }     from './components/skills/skills.component';
import { ProjetosComponent }   from './components/projetos/projetos.component';
import { ContatoComponent }    from './components/contato/contato.component';
import { FooterComponent }     from './components/footer/footer.component';
import { RevealService }       from './shared/models/reveal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CursorComponent,
    SilkCanvasComponent,
    HudComponent,
    HeroComponent,
    SobreComponent,
    SkillsComponent,
    ProjetosComponent,
    ContatoComponent,
    FooterComponent,
  ],
  template: `
    <app-cursor></app-cursor>
    <app-silk-canvas></app-silk-canvas>
    <app-hud></app-hud>
    <main>
      <app-hero></app-hero>
      <app-sobre></app-sobre>
      <app-skills></app-skills>
      <app-projetos></app-projetos>
      <app-contato></app-contato>
    </main>
    <app-footer></app-footer>
  `,
  styles: ['main { position: relative; z-index: 2; }'],
})
export class AppComponent implements OnInit {
  constructor(
    private revealService: RevealService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => this.revealService.init(), 120);
  }
}
