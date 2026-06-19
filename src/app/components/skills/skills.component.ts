import { Component } from '@angular/core';

export interface SkillCard {
  name: string;
  color: string;
  iconPath: string;
  tags: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  cards: SkillCard[] = [
    {
      name: 'FRONT-END',
      color: 'var(--red)',
      iconPath: 'M14,2 L26,8 L26,20 L14,26 L2,20 L2,8 Z',
      tags: ['Angular 17','TypeScript','HTML5','SCSS','Signals','Standalone Components','Reactive Forms','RxJS','Lazy Loading'],
    },
    {
      name: 'BACK-END & BD',
      color: '#FFA000',
      iconPath: 'M3,3 L25,3 L25,25 L3,25 Z',
      tags: ['Firebase','Firestore','Cloud Functions','onSnapshot','Node.js','REST APIs'],
    },
    {
      name: 'FERRAMENTAS',
      color: 'var(--lav)',
      iconPath: 'M14,3 A11,11 0 1,1 13.9,3 Z',
      tags: ['Git & GitHub','Vercel','Figma','VS Code','Angular CLI','npm'],
    },
    {
      name: 'SOFT SKILLS',
      color: 'var(--gold)',
      iconPath: 'M14,2 L17,10 L25,10.5 L19.5,15.5 L21.5,23 L14,19 L6.5,23 L8.5,15.5 L3,10.5 L11,10 Z',
      tags: ['Trabalho em equipe','Design thinking','Metodologias ágeis','Comunicação técnica','Resolução de problemas'],
    },
  ];
}
