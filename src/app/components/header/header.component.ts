import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled" class="header">
      <div class="container">
        <nav class="navbar">
          <a routerLink="/" class="logo">
            <span class="logo-text">Portfólio</span>
          </a>
          
          <button class="menu-toggle" (click)="toggleMenu()" [class.active]="menuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul class="nav-menu" [class.active]="menuOpen">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Início</a></li>
            <li><a routerLink="/sobre" routerLinkActive="active" (click)="closeMenu()">Sobre</a></li>
            <li><a routerLink="/projetos" routerLinkActive="active" (click)="closeMenu()">Projetos</a></li>
            <li><a routerLink="/contato" routerLinkActive="active" (click)="closeMenu()">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1.5rem 0;
      transition: var(--transition-smooth);
      background: transparent;
    }

    .header.scrolled {
      background: rgba(26, 26, 46, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-family: var(--font-display);
      font-size: 1.8rem;
      font-weight: 900;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -1px;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: transparent;
      padding: 0.5rem;
    }

    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: var(--color-text);
      transition: var(--transition-smooth);
      border-radius: 2px;
    }

    .menu-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }

    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }

    .nav-menu {
      display: flex;
      gap: 3rem;
      list-style: none;
      align-items: center;
    }

    .nav-menu li a {
      font-weight: 500;
      font-size: 1rem;
      position: relative;
      padding: 0.5rem 0;
      letter-spacing: 0.5px;
    }

    .nav-menu li a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-accent);
      transition: var(--transition-smooth);
    }

    .nav-menu li a:hover::after,
    .nav-menu li a.active::after {
      width: 100%;
    }

    .nav-menu li a.active {
      color: var(--color-accent);
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }

      .nav-menu {
        position: fixed;
        top: 80px;
        right: -100%;
        flex-direction: column;
        background: rgba(26, 26, 46, 0.98);
        backdrop-filter: blur(10px);
        width: 100%;
        max-width: 300px;
        padding: 2rem;
        gap: 1.5rem;
        transition: var(--transition-smooth);
        box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
        height: calc(100vh - 80px);
        align-items: flex-start;
      }

      .nav-menu.active {
        right: 0;
      }

      .nav-menu li {
        width: 100%;
      }

      .nav-menu li a {
        display: block;
        padding: 1rem 0;
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
