import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about">
      <section class="about-hero">
        <div class="container">
          <h1 class="page-title">Sobre Mim</h1>
          <p class="page-subtitle">Desenvolvedor apaixonado por criar experiências digitais excepcionais</p>
        </div>
      </section>

      <section class="about-content">
        <div class="container">
          <div class="content-grid">
            <div class="about-text">
              <h2>Minha História</h2>
              <p>
                Sou um desenvolvedor full stack com paixão por criar soluções digitais que fazem a diferença. 
                Com anos de experiência em desenvolvimento web, transformo ideias complexas em interfaces 
                intuitivas e funcionais.
              </p>
              <p>
                Minha jornada no desenvolvimento começou com curiosidade e evoluiu para uma carreira dedicada 
                a dominar as tecnologias mais modernas do mercado. Acredito que bom código é aquele que resolve 
                problemas reais de forma elegante.
              </p>
              <p>
                Quando não estou programando, você pode me encontrar explorando novas tecnologias, contribuindo 
                para projetos open source ou compartilhando conhecimento com a comunidade de desenvolvedores.
              </p>
            </div>
            
            <div class="about-stats">
              <div class="stat-card" *ngFor="let stat of stats">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="technologies">
        <div class="container">
          <h2 class="section-title">Tecnologias</h2>
          <div class="tech-grid">
            <div class="tech-category" *ngFor="let category of technologies">
              <h3>{{ category.name }}</h3>
              <div class="tech-items">
                <span class="tech-item" *ngFor="let tech of category.items">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="experience">
        <div class="container">
          <h2 class="section-title">Experiência</h2>
          <div class="timeline">
            <div class="timeline-item" *ngFor="let exp of experiences">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-date">{{ exp.period }}</div>
                <h3>{{ exp.title }}</h3>
                <h4>{{ exp.company }}</h4>
                <p>{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about {
      padding-top: 80px;
    }

    .about-hero {
      background: linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(22, 33, 62, 0.2));
      padding: 6rem 0 4rem;
      text-align: center;
    }

    .page-title {
      font-size: 4rem;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: fadeInUp 0.8s ease-out;
    }

    .page-subtitle {
      font-size: 1.3rem;
      color: rgba(245, 245, 245, 0.7);
      animation: fadeInUp 0.8s ease-out 0.2s both;
    }

    .about-content {
      padding: 6rem 0;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .about-text h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: var(--color-accent);
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.9;
      color: rgba(245, 245, 245, 0.8);
      margin-bottom: 1.5rem;
    }

    .about-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .stat-card {
      background: rgba(26, 26, 46, 0.6);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: var(--transition-smooth);
    }

    .stat-card:hover {
      transform: translateY(-5px);
      border-color: var(--color-accent);
    }

    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      color: var(--color-accent);
      font-family: var(--font-display);
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: rgba(245, 245, 245, 0.7);
      font-size: 1rem;
    }

    .technologies {
      padding: 6rem 0;
      background: rgba(26, 26, 46, 0.3);
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

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .tech-category {
      background: rgba(26, 26, 46, 0.6);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 2rem;
    }

    .tech-category h3 {
      font-size: 1.5rem;
      color: var(--color-accent);
      margin-bottom: 1.5rem;
    }

    .tech-items {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    .tech-item {
      background: rgba(233, 69, 96, 0.1);
      border: 1px solid var(--color-accent);
      color: var(--color-accent);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      transition: var(--transition-smooth);
    }

    .tech-item:hover {
      background: var(--color-accent);
      color: white;
      transform: translateY(-3px);
    }

    .experience {
      padding: 6rem 0;
    }

    .timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background: var(--color-accent);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      padding-left: 2rem;
    }

    .timeline-marker {
      position: absolute;
      left: -0.5rem;
      top: 0;
      width: 1rem;
      height: 1rem;
      background: var(--color-accent);
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(233, 69, 96, 0.2);
    }

    .timeline-content {
      background: rgba(26, 26, 46, 0.6);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 2rem;
      transition: var(--transition-smooth);
    }

    .timeline-content:hover {
      border-color: var(--color-accent);
      transform: translateX(10px);
    }

    .timeline-date {
      color: var(--color-accent);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .timeline-content h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .timeline-content h4 {
      color: rgba(245, 245, 245, 0.7);
      font-weight: 400;
      margin-bottom: 1rem;
    }

    .timeline-content p {
      color: rgba(245, 245, 245, 0.7);
      line-height: 1.7;
    }

    @media (max-width: 968px) {
      .page-title {
        font-size: 3rem;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .about-stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .section-title {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 576px) {
      .page-title {
        font-size: 2.5rem;
      }

      .about-stats {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  stats = [
    { number: '3+', label: 'Anos de Experiência' },
    { number: '10+', label: 'Projetos Concluídos' },
    { number: '100%', label: 'Dedicação' }
  ];

  technologies = [
    {
      name: 'Frontend',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      items: ['Node.js', 'NestJS','PostgreSQL']
    },
    {
      name: 'Ferramentas',
      items: ['Git', 'Docker','Figma', 'VS Code', 'Postman']
    }
  ];

  experiences = [
    {
      period: '2024 - Presente',
      title: 'Desenvolvedor Júnior Angular',
      company: 'Dynoix',
      description: 'Desenvolvimento de aplicações web escaláveis usando Angular.'
    },
    {
      period: '2025 - Presente',
      title: 'Desenvolvedor Full Stack',
      company: 'Freelancer',
      description: 'Desenvolvimento de sistemas usando Angular e NestJs.'
    },
  ];
}
