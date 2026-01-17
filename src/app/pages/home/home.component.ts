import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home">
      <section class="hero">
        <div class="container">
          <div class="hero-content" [class.animate]="isLoaded">
            <div class="hero-text">
              <span class="greeting">Olá, eu sou</span>
              <h1 class="hero-title">
                <span class="name">Seu Nome</span>
              </h1>
              <p class="hero-subtitle">Desenvolvedor Full Stack & Designer</p>
              <p class="hero-description">
                Transformo ideias em experiências digitais excepcionais através de código limpo e design impactante.
              </p>
              <div class="hero-buttons">
                <a routerLink="/projetos" class="btn btn-primary">Ver Projetos</a>
                <a routerLink="/contato" class="btn btn-secondary">Entre em Contato</a>
              </div>
            </div>
            <div class="hero-visual">
              <div class="visual-circle"></div>
              <div class="visual-code">
                <div class="code-line" *ngFor="let line of codeLines; let i = index" 
                     [style.animation-delay]="i * 0.1 + 's'">
                  {{ line }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-indicator">
          <span></span>
        </div>
      </section>

      <section class="skills">
        <div class="container">
          <h2 class="section-title">Habilidades</h2>
          <div class="skills-grid">
            <div class="skill-card" *ngFor="let skill of skills">
              <div class="skill-icon">{{ skill.icon }}</div>
              <h3>{{ skill.name }}</h3>
              <p>{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>Pronto para criar algo incrível?</h2>
            <p>Vamos trabalhar juntos no seu próximo projeto</p>
            <a routerLink="/contato" class="btn btn-primary btn-lg">Começar Agora</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      padding-top: 80px;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: 4rem 0;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      opacity: 0;
      transform: translateY(30px);
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-content.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .greeting {
      font-size: 1.2rem;
      color: var(--color-accent);
      font-weight: 600;
      display: block;
      margin-bottom: 1rem;
      animation: fadeInUp 0.8s ease-out 0.2s both;
    }

    .hero-title {
      font-size: 4rem;
      margin-bottom: 1rem;
      line-height: 1.1;
      animation: fadeInUp 0.8s ease-out 0.4s both;
    }

    .name {
      display: block;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.8rem;
      color: rgba(245, 245, 245, 0.8);
      margin-bottom: 1.5rem;
      font-weight: 300;
      animation: fadeInUp 0.8s ease-out 0.6s both;
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.8;
      color: rgba(245, 245, 245, 0.7);
      margin-bottom: 2rem;
      max-width: 500px;
      animation: fadeInUp 0.8s ease-out 0.8s both;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      animation: fadeInUp 0.8s ease-out 1s both;
    }

    .btn {
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 8px;
      transition: var(--transition-smooth);
      display: inline-block;
    }

    .btn-primary {
      background: var(--color-accent);
      color: white;
    }

    .btn-primary:hover {
      background: var(--color-accent-light);
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid var(--color-accent);
      color: var(--color-accent);
    }

    .btn-secondary:hover {
      background: var(--color-accent);
      color: white;
      transform: translateY(-3px);
    }

    .btn-lg {
      padding: 1.2rem 2.5rem;
      font-size: 1.1rem;
    }

    .hero-visual {
      position: relative;
      height: 500px;
      animation: fadeInUp 0.8s ease-out 0.6s both;
    }

    .visual-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(233, 69, 96, 0.2), transparent);
      animation: pulse 4s ease-in-out infinite;
    }

    .visual-code {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(26, 26, 46, 0.9);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 2rem;
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .code-line {
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      color: var(--color-accent);
      margin-bottom: 0.5rem;
      opacity: 0;
      animation: fadeInUp 0.5s ease-out forwards;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .scroll-indicator span {
      display: block;
      width: 30px;
      height: 50px;
      border: 2px solid var(--color-accent);
      border-radius: 25px;
      position: relative;
    }

    .scroll-indicator span::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background: var(--color-accent);
      border-radius: 50%;
      animation: scroll 2s infinite;
    }

    @keyframes scroll {
      0%, 100% {
        top: 10px;
        opacity: 1;
      }
      50% {
        top: 30px;
        opacity: 0;
      }
    }

    .skills {
      padding: 6rem 0;
      background: rgba(26, 26, 46, 0.5);
    }

    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 3rem;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .skill-card {
      background: rgba(26, 26, 46, 0.6);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 2.5rem;
      transition: var(--transition-smooth);
      text-align: center;
    }

    .skill-card:hover {
      transform: translateY(-10px);
      border-color: var(--color-accent);
      box-shadow: 0 20px 40px rgba(233, 69, 96, 0.2);
    }

    .skill-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .skill-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--color-accent);
    }

    .skill-card p {
      color: rgba(245, 245, 245, 0.7);
      line-height: 1.6;
    }

    .cta {
      padding: 6rem 0;
      background: linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(22, 33, 62, 0.2));
    }

    .cta-content {
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
    }

    .cta-content h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .cta-content p {
      font-size: 1.3rem;
      color: rgba(245, 245, 245, 0.7);
      margin-bottom: 2rem;
    }

    @media (max-width: 968px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero-title {
        font-size: 3rem;
      }

      .hero-description {
        margin: 0 auto 2rem;
      }

      .hero-buttons {
        justify-content: center;
      }

      .hero-visual {
        height: 300px;
      }

      .visual-circle {
        width: 250px;
        height: 250px;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .cta-content h2 {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 576px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  isLoaded = false;

  codeLines = [
    'const developer = {',
    '  name: "Seu Nome",',
    '  skills: ["Angular", "React"],',
    '  passion: "Code & Design"',
    '};'
  ];

  skills = [
    {
      icon: '💻',
      name: 'Desenvolvimento Web',
      description: 'Criação de aplicações web modernas com as melhores tecnologias do mercado.'
    },
    {
      icon: '📱',
      name: 'Mobile First',
      description: 'Interfaces responsivas que funcionam perfeitamente em qualquer dispositivo.'
    },
    {
      icon: '🎨',
      name: 'UI/UX Design',
      description: 'Design intuitivo e atraente que proporciona experiências memoráveis.'
    },
    {
      icon: '⚡',
      name: 'Performance',
      description: 'Otimização de código para garantir máxima velocidade e eficiência.'
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
}
