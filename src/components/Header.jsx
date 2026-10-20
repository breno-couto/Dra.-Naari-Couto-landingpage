import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../index.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGOTIPOS */}
        <a
          href="#home"
          className="header-brand"
          onClick={closeMenu}
        >
          <img
            src="/images/nclogo.png"
            alt="Dra. Naari Couto"
            className="brand-marknc"
          />

          <img
            src="/images/nome_logo.png"
            alt="Dra. Naari Couto - Cirurgiã da Pelve Feminina"
            className="brand-mark"
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav
          id="header-navigation"
          className={`header-nav ${isMenuOpen ? 'active' : ''}`}
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

          <a href="#especialidades" onClick={closeMenu}>
            ESPECIALIDADES
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a href="#historia" onClick={closeMenu}>
            HISTÓRIA
          </a>
        </nav>

        {/* BOTÃO DO MENU MOBILE */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation"
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
