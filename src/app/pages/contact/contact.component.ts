import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact">
      <section class="contact-hero">
        <div class="container">
          <h1 class="page-title">Entre em Contato</h1>
          <p class="page-subtitle">Vamos criar algo incrível juntos</p>
        </div>
      </section>

      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h2>Vamos Conversar</h2>
              <p>
                Estou sempre aberto a novos projetos e oportunidades. Se você
                tem uma ideia ou precisa de ajuda com um projeto, não hesite em
                entrar em contato!
              </p>

              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div class="info-text">
                    <h4>Email</h4>
                    <p>gabrielreisdev&#64;gmail.com</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon"><i class="fa-solid fa-mobile"></i></div>
                  <div class="info-text">
                    <h4>Telefone</h4>
                    <p>+55 (17)981241887</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon"><i class="fa-solid fa-map-pin"></i></div>
                  <div class="info-text">
                    <h4>Localização</h4>
                    <p>Ibirá, São Paulo, Brasil</p>
                  </div>
                </div>
              </div>

              <div class="social-links">
                <h4>Me Encontre nas Redes</h4>
                <div class="social-icons">
                  <a href="https://github.com/Gabrieldevreis" class="social-icon" title="GitHub">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/gabrieldevreis/" class="social-icon" title="LinkedIn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/gabrielreis.dev/" class="social-icon" title="Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .contact {
        padding-top: 80px;
      }

      .contact-hero {
        background: linear-gradient(
          135deg,
          rgba(233, 69, 96, 0.1),
          rgba(22, 33, 62, 0.2)
        );
        padding: 6rem 0 4rem;
        text-align: center;
      }

      .page-title {
        font-size: 4rem;
        margin-bottom: 1rem;
        background: linear-gradient(
          135deg,
          var(--color-accent),
          var(--color-accent-light)
        );
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

      .contact-content {
        padding: 6rem 0;
        max-width: 500px;
        margin: 0 auto;
      }

      .contact-info h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--color-accent);
      }

      .contact-info > p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: rgba(245, 245, 245, 0.7);
        margin-bottom: 3rem;
      }

      .info-items {
        margin-bottom: 3rem;
      }

      .info-item {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: rgba(26, 26, 46, 0.6);
        border: 1px solid var(--color-border);
        border-radius: 12px;
        transition: var(--transition-smooth);
      }

      .info-item:hover {
        border-color: var(--color-accent);
        transform: translateX(10px);
      }

      .info-icon {
        font-size: 2rem;
        min-width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .info-icon i {
        color: var(--color-accent);
      }

      .info-text h4 {
        color: var(--color-accent);
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }

      .info-text a,
      .info-text p {
        color: rgba(245, 245, 245, 0.7);
        transition: var(--transition-smooth);
      }

      .info-text a:hover {
        color: var(--color-accent);
      }

      .social-links h4 {
        color: var(--color-accent);
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }

      .social-icons {
        display: flex;
        gap: 1rem;
      }

      .social-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(26, 26, 46, 0.6);
        border: 2px solid var(--color-border);
        border-radius: 50%;
        transition: var(--transition-smooth);
        color: var(--color-text);
      }

      .social-icon:hover {
        background: var(--color-accent);
        border-color: var(--color-accent);
        transform: translateY(-5px);
      }

      .contact-form-container {
        background: rgba(26, 26, 46, 0.6);
        border: 1px solid var(--color-border);
        border-radius: 12px;
        padding: 3rem;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .form-group label {
        color: var(--color-accent);
        font-weight: 600;
        font-size: 1rem;
      }

      .form-group input,
      .form-group textarea {
        padding: 1rem;
        background: rgba(10, 10, 15, 0.5);
        border: 1px solid var(--color-border);
        border-radius: 8px;
        color: var(--color-text);
        font-size: 1rem;
        font-family: var(--font-body);
        transition: var(--transition-smooth);
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(233, 69, 96, 0.1);
      }

      .form-group textarea {
        resize: vertical;
        min-height: 150px;
      }

      .btn-submit {
        padding: 1.2rem 2rem;
        background: var(--color-accent);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition-smooth);
      }

      .btn-submit:hover:not(:disabled) {
        background: var(--color-accent-light);
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
      }

      .btn-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .form-message {
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        background: rgba(233, 69, 96, 0.1);
        border: 1px solid var(--color-accent);
        color: var(--color-accent);
      }

      .form-message.success {
        background: rgba(76, 175, 80, 0.1);
        border-color: #4caf50;
        color: #4caf50;
      }

      @media (max-width: 968px) {
        .page-title {
          font-size: 3rem;
        }

        .contact-grid {
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        .contact-form-container {
          padding: 2rem;
        }
      }

      @media (max-width: 576px) {
        .page-title {
          font-size: 2.5rem;
        }

        .contact-info h2 {
          font-size: 2rem;
        }

        .contact-form-container {
          padding: 1.5rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  isSubmitting = false;
  submitMessage = "";
  submitSuccess = false;

  onSubmit() {
    this.isSubmitting = true;
    this.submitMessage = "";

    // Simulação de envio
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage =
        "Mensagem enviada com sucesso! Entrarei em contato em breve.";

      // Limpar formulário
      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        this.submitMessage = "";
      }, 5000);
    }, 2000);
  }
}
