import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../index.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-container">

        <a
          href="#home"
          className="header-brand"
          onClick={closeMenu}
        >
          <img
            src="/images/nclogo.png"
            alt="Logo Dra. Naari Couto"
            className="brand-mark"
          />

          <span className="brand-text">
            <span className="brand-eyebrow">
              Dra.
            </span>

            <span className="brand-title">
              Naari Couto
            </span>

            <span className="brand-tagline">
              Cirurgia pélvica minimamente invasiva
            </span>
          </span>
        </a>

        <nav
          className={`header-nav ${isMenuOpen ? 'active' : ''
            }`}
        >
          <a href="#home" onClick={closeMenu}>
            HOME
          </a>

          <a href="#sobre" onClick={closeMenu}>
            SOBRE
          </a>

          <a href="#atendimentos" onClick={closeMenu}>
            ATENDIMENTOS
          </a>

          <a
            href="#especialidades"
            onClick={closeMenu}
          >
            ESPECIALIDADES
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#historia" onClick={closeMenu}>
            HISTÓRIA
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() =>
            setIsMenuOpen(!isMenuOpen)
          }
          aria-label={
            isMenuOpen
              ? 'Fechar menu'
              : 'Abrir menu'
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>
    </header>
  );
}