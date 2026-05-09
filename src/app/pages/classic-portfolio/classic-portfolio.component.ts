import { AfterViewInit, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

export type TechId = 'html' | 'css' | 'javascript' | 'react' | 'angular' | 'git' | 'nodejs';

export interface SkillItem {
  id: TechId;
  name: string;
  src: string;
  alt: string;
  proficiency: string;
  proficiencyDetail: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: SkillItem[];
}

export interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  technologies: readonly TechId[];
}

export interface Toast {
  type: 'success' | 'error';
  message: string;
}

@Component({
  selector: 'app-classic-portfolio',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RevealDirective],
  templateUrl: './classic-portfolio.component.html',
  styleUrl: './classic-portfolio.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ClassicPortfolioComponent implements AfterViewInit, OnDestroy {
  menuOpen = false;
  activeSection = 'profile';
  scrollHintVisible = true;
  formSubmitting = false;
  toast: Toast | null = null;

  readonly emailAddress = 'gabrielreisdev@gmail.com';
  readonly linkedinProfileUrl = 'https://www.linkedin.com/in/gabrieldevreis/';
  readonly githubProfileUrl = 'https://github.com/Gabrieldevreis/';

  /**
   * Opcional: após criar um formulário em https://formspree.io, cole o endpoint aqui
   * (ex.: https://formspree.io/f/xyzabcde). Se ficar vazio, o envio usa mailto:.
   */
  readonly contactFormAction = '';

  /** Filtro da seção projetos ao clicar numa habilidade (null = todos). */
  projectTechFilter: TechId | null = null;

  readonly skillGroups: SkillGroup[] = [
    {
      id: 'frontend',
      label: 'Frontend',
      items: [
        {
          id: 'html',
          name: 'HTML',
          src: 'assets/my-portfolio/html-logo.png',
          alt: 'Logo HTML',
          proficiency: 'Intermediário',
          proficiencyDetail: '1+ ano com marcação semântica e acessibilidade',
        },
        {
          id: 'css',
          name: 'CSS',
          src: 'assets/my-portfolio/css-logo.png',
          alt: 'Logo CSS',
          proficiency: 'Intermediário',
          proficiencyDetail: 'Layouts responsivos, animações e design systems',
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          src: 'assets/my-portfolio/js-logo.png',
          alt: 'Logo JavaScript',
          proficiency: 'Intermediário',
          proficiencyDetail: 'DOM, consumo de APIs e lógica de interface',
        },
        {
          id: 'react',
          name: 'React',
          src: 'assets/my-portfolio/react-logo.png',
          alt: 'Logo React',
          proficiency: 'Intermediário',
          proficiencyDetail: 'Componentes, hooks e ecossistema moderno',
        },
        {
          id: 'angular',
          name: 'Angular',
          src: 'assets/my-portfolio/angular-logo.png',
          alt: 'Logo Angular',
          proficiency: 'Intermediário',
          proficiencyDetail: 'SPAs e este portfólio em Angular',
        },
      ],
    },
    {
      id: 'tools',
      label: 'Ferramentas & backend',
      items: [
        {
          id: 'git',
          name: 'Git',
          src: 'assets/my-portfolio/git-logo.png',
          alt: 'Logo Git',
          proficiency: 'Intermediário',
          proficiencyDetail: 'Branches, PRs e fluxo de versionamento',
        },
        {
          id: 'nodejs',
          name: 'Node.js',
          src: 'assets/my-portfolio/node-logo.png',
          alt: 'Logo Node.js',
          proficiency: 'Em evolução',
          proficiencyDetail: 'APIs e automação com JavaScript no servidor',
        },
      ],
    },
  ];

  readonly projects: PortfolioProject[] = [
    {
      title: 'Site do Super Mário',
      description:
        'Landing temática inspirada no universo Super Mario, com layout responsivo e elementos visuais que contam uma história simples e direta.',
      image: 'assets/my-portfolio/site-mario.png',
      github: 'https://github.com/Gabrieldevreis/Site-do-Super-Mario',
      demo: 'https://gabrieldevreis.github.io/Site-do-Super-Mario/',
      technologies: ['html', 'css', 'javascript', 'git'],
    },
    {
      title: 'Site Temperatura',
      description:
        'Consulta condições climáticas e exibe a temperatura de forma clara, praticando consumo de API e estados na interface.',
      image: 'assets/my-portfolio/site-temperatura.png',
      github: 'https://github.com/Gabrieldevreis/Site-Temperatura',
      demo: 'https://gabrieldevreis.github.io/Site-Temperatura/',
      technologies: ['html', 'css', 'javascript', 'git'],
    },
    {
      title: 'Conversor de Moedas',
      description:
        'Conversão entre moedas com foco em usabilidade, integrando API de câmbio e retorno visual para entradas e resultados.',
      image: 'assets/my-portfolio/conversor-de-moedas.jpeg',
      github: 'https://github.com/Gabrieldevreis/Conversor-de-moedas',
      demo: 'https://gabrieldevreis.github.io/Conversor-de-moedas/',
      technologies: ['html', 'css', 'javascript', 'git', 'nodejs'],
    },
  ];

  private readonly techLabels: Record<TechId, string> = {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    react: 'React',
    angular: 'Angular',
    git: 'Git',
    nodejs: 'Node.js',
  };

  private toastTimer?: ReturnType<typeof setTimeout>;
  private sectionObserver?: IntersectionObserver;
  private scrollHintHandler?: () => void;

  // ─── Lifecycle ────────────────────────────────────────────────────────────

  ngAfterViewInit(): void {
    this.initSectionObserver();
    this.initScrollHint();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    if (this.scrollHintHandler) {
      window.removeEventListener('scroll', this.scrollHintHandler);
    }
    clearTimeout(this.toastTimer);
  }

  // ─── Active nav (section observer) ────────────────────────────────────────

  private initSectionObserver(): void {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        }
      },
      { threshold: 0.35, rootMargin: '-5% 0px -5% 0px' },
    );
    ['profile', 'about', 'experience', 'projects', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.sectionObserver!.observe(el);
    });
  }

  // ─── Scroll hint (desaparece no primeiro scroll) ───────────────────────────

  private initScrollHint(): void {
    const handler = () => {
      this.scrollHintVisible = false;
      window.removeEventListener('scroll', handler);
    };
    this.scrollHintHandler = handler;
    window.addEventListener('scroll', handler, { passive: true });
  }

  // ─── Toast ────────────────────────────────────────────────────────────────

  private showToast(type: 'success' | 'error', message: string): void {
    clearTimeout(this.toastTimer);
    this.toast = { type, message };
    this.toastTimer = setTimeout(() => {
      this.toast = null;
    }, 4000);
  }

  // ─── Magnetic button effect ───────────────────────────────────────────────

  onMagneticMove(event: MouseEvent): void {
    const btn = event.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 16;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  }

  onMagneticLeave(event: MouseEvent): void {
    (event.currentTarget as HTMLElement).style.transform = '';
  }

  // ─── Blob parallax ────────────────────────────────────────────────────────

  onProfileMouseMove(event: MouseEvent): void {
    const blob = document.querySelector('.profile-photo-blob') as HTMLElement | null;
    if (!blob) return;
    const section = event.currentTarget as HTMLElement;
    const rect = section.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * -24;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -24;
    blob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  }

  onProfileMouseLeave(): void {
    const blob = document.querySelector('.profile-photo-blob') as HTMLElement | null;
    if (blob) blob.style.transform = '';
  }

  // ─── Reveal delay helper ──────────────────────────────────────────────────

  projectRevealDelay(index: number): string {
    return `${index * 0.12}s`;
  }

  // ─── Getters ──────────────────────────────────────────────────────────────

  get filteredProjects(): PortfolioProject[] {
    if (!this.projectTechFilter) {
      return this.projects;
    }
    return this.projects.filter((p) => p.technologies.includes(this.projectTechFilter!));
  }

  get projectTechFilterLabel(): string {
    if (!this.projectTechFilter) {
      return '';
    }
    return this.techLabels[this.projectTechFilter];
  }

  get mailtoLink(): string {
    const subject = encodeURIComponent('Contato pelo portfólio');
    return `mailto:${this.emailAddress}?subject=${subject}`;
  }

  // ─── Methods ──────────────────────────────────────────────────────────────

  techLabel(id: TechId): string {
    return this.techLabels[id];
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onContactFormSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    if (this.contactFormAction) {
      this.formSubmitting = true;
      fetch(this.contactFormAction, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
        .then((r) => {
          this.formSubmitting = false;
          if (r.ok) {
            this.showToast('success', 'Mensagem enviada! Responderei em breve.');
            form.reset();
          } else {
            this.showToast('error', 'Erro ao enviar. Tente novamente.');
          }
        })
        .catch(() => {
          this.formSubmitting = false;
          this.showToast('error', 'Erro de conexão. Tente novamente.');
        });
    } else {
      const subject = encodeURIComponent(`Contato portfólio — ${name || 'visitante'}`);
      const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}\n`);
      window.location.href = `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
      this.showToast('success', 'Abrindo seu aplicativo de e-mail...');
    }
  }

  openCv(): void {
    window.open('assets/my-portfolio/Profile.pdf', '_blank');
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  filterProjectsByTech(techId: TechId): void {
    this.projectTechFilter = techId;
    requestAnimationFrame(() => this.scrollTo('projects'));
  }

  clearProjectTechFilter(): void {
    this.projectTechFilter = null;
  }

  skillEnterDelay(groupIndex: number, itemIndex: number): string {
    const seconds = groupIndex * 0.07 + itemIndex * 0.055;
    return `${seconds}s`;
  }
}
