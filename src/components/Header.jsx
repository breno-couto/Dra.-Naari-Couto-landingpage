import React, { useState } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-container">
                {/* Marca: imagem NC (abreviação) + nome em texto */}
                <a href="#home" className="header-brand">
                    <img
                        src="/images/nclogo.png"
                        alt="NC"
                        className="brand-mark"
                    />
                    <span className="brand-text">
                        <span className="brand-eyebrow">Dra.</span>
                        <span className="brand-title">Naari Couto</span>
                        <span className="brand-tagline">Cirurgia Pélvica Minimamente Invasiva</span>
                    </span>
                </a>

                {/* Menu de Navegação Principal */}
                <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a>
                    <a href="#sobre" onClick={() => setIsMenuOpen(false)}>SOBRE</a>
                    <a href="#atendimentos" onClick={() => setIsMenuOpen(false)}>ATENDIMENTOS</a>
                    <a href="#especialidades" onClick={() => setIsMenuOpen(false)}>ESPECIALIDADES</a>
                    <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                    <a href="#historia" onClick={() => setIsMenuOpen(false)}>HISTÓRIA</a>
                </nav>

                {/* Ícones de Acesso Rápido */}
                <div className="header-actions">
                    <a
                        href="https://wa.me/5500000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        title="WhatsApp"
                    >
                        <Phone size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        title="Instagram"
                    >
                        <InstagramIcon size={20} />
                    </a>
                    <a
                        href="#localizacao"
                        aria-label="Localização"
                        title="Localização"
                    >
                        <MapPin size={20} />
                    </a>

                    {/* Botão Hambúrguer para Celular */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
