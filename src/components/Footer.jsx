import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

function Footer() {
    return (
        <footer className="footer" id="localizacao">
            <div className="footer-content">
                <div className="footer-block">
                    <h3>Localização</h3>
                    <p>
                        <MapPin size={18} />
                        Endereço do consultório, Cidade - UF
                    </p>
                </div>

                <div className="footer-block">
                    <h3>Contato</h3>
                    <p>
                        <Phone size={18} />
                        (00) 00000-0000
                    </p>
                    <p>
                        <Clock size={18} />
                        Seg. a Sex., 8h às 18h
                    </p>
                </div>

                <div className="footer-block">
                    <h3>Redes Sociais</h3>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon size={18} />
                        @dra.naaricouto
                    </a>
                </div>
            </div>

            <p className="footer-copy">
                © {new Date().getFullYear()} Dra. Naari Couto. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;
