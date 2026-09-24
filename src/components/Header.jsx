import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                {/* Imagem da logomarca completa (NC + Texto "Dra. Naari Couto") */}
                <img
                    src="/images/nclogo.png"
                    alt="Dra. Naari Couto - Cirurgia Pélvica Minimamente Invasiva"
                />
            </div>

            <nav className="header-icons">
                <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                >
                    <Phone size={24} />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <InstagramIcon size={24} />
                </a>
                <a
                    href="#localizacao"
                    aria-label="Localização"
                >
                    <MapPin size={24} />
                </a>
            </nav>
        </header>
    );
}

export default Header;