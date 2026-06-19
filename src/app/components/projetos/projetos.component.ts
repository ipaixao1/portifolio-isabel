import { Component } from '@angular/core';

export interface Project {
  name:      string;
  desc:      string;
  techs:     string[];
  demoUrl:   string;
  githubUrl: string;
  featured:  boolean;
  badge?:    string;
  tcc?:      boolean;
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
      name: 'Brisa Vinícola',
      desc: 'E-commerce sofisticado de vinhos desenvolvido como TCC do curso técnico de Informática para a Internet. Cadastro de produtos, carrinho de compras, autenticação de usuários e painel administrativo — do front ao banco de dados.',
      techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
      demoUrl: '#',
      githubUrl: 'https://github.com/ipaixao1/TCC---BrisaVinicola',
      featured: false,
      tcc: true,
    },
    {
      name: 'Impressora Elgin',
      desc: 'Aplicação Java desenvolvida no 2º semestre da faculdade para controle de impressora térmica Elgin via menu interativo. Funcionalidades: impressão de texto, QR Code, código de barras, nota fiscal e corte de papel — comunicação direta com o hardware.',
      techs: ['Java', 'ESC/POS', 'OOP'],
      demoUrl: '#',
      githubUrl: 'https://github.com/anna-clara6/impressora-elgin-final',
      featured: false,
      badge: '◈ FACULDADE',
    },
    {
      name: 'Portfolio Silksong',
      desc: 'Este próprio portfólio! Desenvolvido com tema em Hollow Knight: Silksong, com cursor customizado, fios de seda interativos no canvas, pixel art animada da Hornet, HUD estilo game e animações scroll reveal.',
      techs: ['Angular 17', 'TypeScript', 'SCSS', 'Canvas 2D', 'Vercel'],
      demoUrl: '#',
      githubUrl: 'https://github.com/ipaixao1/portifolio-isabel',
      featured: false,
    },
  ];

  get featuredProject(): Project { return this.projects.find(p => p.featured)!; }
  get otherProjects():   Project[] { return this.projects.filter(p => !p.featured); }
}
