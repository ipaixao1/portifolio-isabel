import { Component } from '@angular/core';

export interface Project {
  name: string;
  desc: string;
  techs: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  badge?: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  projects: Project[] = [
    {
      name: 'BAIANAr',
      desc: 'Sistema completo de pedidos e gestão para restaurantes. Quatro interfaces em Angular 17: storefront mobile para clientes, dashboard administrativo, KDS para cozinha e app para entregadores — tudo em tempo real via Firebase onSnapshot.',
      techs: ['Angular 17', 'Firebase', 'Firestore', 'TypeScript', 'SCSS', 'Vercel'],
      demoUrl: 'https://baianar.vercel.app',
      githubUrl: 'https://github.com/ipaixao1/Comanda-Digital---BAIANAr',
      featured: true,
      badge: '★ DESTAQUE',
    },
    {
      name: 'Em Construção',
      desc: 'Novo projeto a caminho. Adicione título, descrição, tecnologias e links quando estiver pronto.',
      techs: ['Em breve'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      name: 'Em Construção',
      desc: 'Espaço reservado para mostrar sua versatilidade com diferentes stacks e tipos de projeto.',
      techs: ['Em breve'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  get featuredProject(): Project   { return this.projects.find(p => p.featured)!; }
  get otherProjects(): Project[]   { return this.projects.filter(p => !p.featured); }
}
