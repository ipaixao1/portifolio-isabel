import { Component } from '@angular/core';

export interface ContactLink {
  label: string;
  value: string;
  url: string;
  iconPath: string;
}

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
})
export class ContatoComponent {
  
  email   = 'sisabelvirginia@gmail.com';
  github  = 'https://github.com/ipaixao1';
  linkedin = 'https://www.linkedin.com/in/isabel-paix%C3%A3o%F0%9F%A6%8B-2abb45231/';
  whatsapp = 'https://wa.me/5511979907856';

  links: ContactLink[] = [
    {
      label: 'GITHUB',
      value: 'github.com/isabel',
      url: this.github,
      iconPath: 'M18 8C12.48 8 8 12.48 8 18c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0118 13.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48A10.02 10.02 0 0028 18c0-5.52-4.48-10-10-10z',
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/isabel',
      url: this.linkedin,
      iconPath: 'M10 14h4v13h-4zm2-7a2.3 2.3 0 1 0 0 4.6A2.3 2.3 0 0 0 12 7zm5 7h4v2.1C22 14.7 23.2 14 25 14c3.3 0 4 2 4 5v8h-4v-7c0-1.6-.6-2.7-2-2.7-1.3 0-2 1-2 2.7v7h-4V14z',
    },
    {
      label: 'EMAIL',
      value: this.email,
      url: `mailto:${this.email}`,
      iconPath: 'M4 10h28v20H4z M4 10l14 13L32 10',
    },
    {
      label: 'WHATSAPP',
      value: '+55 (11) 97990-7856',
      url: this.whatsapp,
      iconPath: 'M18 9A9 9 0 0 0 9 18c0 1.6.41 3.1 1.13 4.4L9 27l4.72-1.12A9 9 0 1 0 18 9z',
    },
  ];
}
