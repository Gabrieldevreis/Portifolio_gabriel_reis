import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects">
      <section class="projects-hero">
        <div class="container">
          <h1 class="page-title">Meus Projetos</h1>
          <p class="page-subtitle">Explore alguns dos meus trabalhos mais recentes</p>
        </div>
      </section>

      <section class="projects-filter">
        <div class="container">
          <div class="filter-buttons">
            <button 
              *ngFor="let category of categories"
              [class.active]="selectedCategory === category"
              (click)="filterProjects(category)"
              class="filter-btn">
              {{ category }}
            </button>
          </div>
        </div>
      </section>

      <section class="projects-grid">
        <div class="container">
          <div class="grid">
            <div class="project-card" *ngFor="let project of filteredProjects">
              <div class="project-image">
                <div class="image-placeholder">{{ project.image }}</div>
                <div class="project-overlay">
                  <div class="project-links">
                    <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank" class="project-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Demo
                    </a>
                    <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="project-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-content">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div class="project-tags">
                  <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .projects {
      padding-top: 80px;
    }

    .projects-hero {
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

    .projects-filter {
      padding: 3rem 0;
      background: rgba(26, 26, 46, 0.3);
    }

    .filter-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.8rem 1.5rem;
      background: rgba(26, 26, 46, 0.6);
      border: 1px solid var(--color-border);
      color: var(--color-text);
      border-radius: 25px;
      font-weight: 500;
      transition: var(--transition-smooth);
    }

    .filter-btn:hover,
    .filter-btn.active {
      background: var(--color-accent);
      border-color: var(--color-accent);
      color: white;
      transform: translateY(-3px);
    }

    .projects-grid {
      padding: 6rem 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
    }

    .project-card {
      background: rgba(26, 26, 46, 0.6);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      transition: var(--transition-smooth);
    }

    .project-card:hover {
      transform: translateY(-10px);
      border-color: var(--color-accent);
      box-shadow: 0 20px 40px rgba(233, 69, 96, 0.2);
    }

    .project-image {
      position: relative;
      height: 250px;
      overflow: hidden;
      background: rgba(22, 33, 62, 0.5);
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      background: linear-gradient(135deg, rgba(233, 69, 96, 0.2), rgba(22, 33, 62, 0.4));
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(26, 26, 46, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: var(--transition-smooth);
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .project-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: var(--color-accent);
      color: white;
      border-radius: 8px;
      font-weight: 600;
      transition: var(--transition-smooth);
    }

    .project-link:hover {
      background: var(--color-accent-light);
      transform: translateY(-3px);
    }

    .project-content {
      padding: 2rem;
    }

    .project-content h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--color-accent);
    }

    .project-content p {
      color: rgba(245, 245, 245, 0.7);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      padding: 0.4rem 0.8rem;
      background: rgba(233, 69, 96, 0.1);
      border: 1px solid var(--color-accent);
      color: var(--color-accent);
      border-radius: 15px;
      font-size: 0.85rem;
    }

    @media (max-width: 968px) {
      .page-title {
        font-size: 3rem;
      }

      .grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
      }
    }

    @media (max-width: 576px) {
      .page-title {
        font-size: 2.5rem;
      }

      .grid {
        grid-template-columns: 1fr;
      }

      .filter-buttons {
        gap: 0.5rem;
      }

      .filter-btn {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class ProjectsComponent {
  selectedCategory = 'Todos';
  
  categories = ['Todos', 'Web', 'Mobile', 'Design'];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e dashboard administrativo.',
      image: '🛒',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com sincronização em tempo real e colaboração em equipe.',
      image: '📋',
      tags: ['React', 'Firebase', 'TypeScript'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Website de portfólio moderno e responsivo com animações suaves e design minimalista.',
      image: '💼',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Aplicativo de previsão do tempo com dados em tempo real e interface intuitiva.',
      image: '🌤️',
      tags: ['React Native', 'API', 'Mobile'],
      demoUrl: '#'
    },
    {
      id: 5,
      title: 'Social Dashboard',
      description: 'Dashboard analítico para redes sociais com gráficos interativos e métricas em tempo real.',
      image: '📊',
      tags: ['Vue.js', 'Chart.js', 'Design'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Plataforma de blog com editor de conteúdo rico, sistema de comentários e SEO otimizado.',
      image: '✍️',
      tags: ['Next.js', 'PostgreSQL', 'Web'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  filteredProjects: Project[] = this.projects;

  filterProjects(category: string) {
    this.selectedCategory = category;
    
    if (category === 'Todos') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
      );
    }
  }
}
