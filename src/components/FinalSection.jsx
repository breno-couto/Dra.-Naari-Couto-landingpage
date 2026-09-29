import { MessageCircle } from 'lucide-react';
import '../index.css';

export default function FinalSection() {
    return (
        <section className="final-section">

            <div className="final-content">

                <div className="final-photo-wrapper">

                    <img
                        src="/images/foto_ultima.png"
                        alt="Dra. Naari Couto"
                        className="final-photo"
                    />

                </div>

                <div className="final-text">

                    <h2>
                        Agende sua avaliação agora
                    </h2>

                    <p>
                        Mesmo com o fim da jornada, a Dra. Naari
                        está aqui para cuidar de você.
                    </p>

                    <p className="final-highlight">
                        Atendimento em Cirurgia Pélvica
                        Minimamente Invasiva
                    </p>

                    <a
                        href="https://wa.me/5577998480100"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="final-button"
                    >
                        <MessageCircle size={15} />

                        <span>
                            Agende sua consulta
                        </span>
                    </a>

                </div>

            </div>

            <footer className="footer">

                <div className="footer-content">

                    <div className="footer-brand">

                        <img
                            src="/images/nclogo.png"
                            alt="Logo Dra. Naari Couto"
                            className="footer-logo"
                        />

                    </div>

                    <div className="footer-block">

                        <h3>
                            MENU
                        </h3>

                        <a href="#home">
                            HOME
                        </a>

                        <a href="#sobre">
                            SOBRE
                        </a>

                        <a href="#atendimentos">
                            ATENDIMENTOS
                        </a>

                        <a href="#especialidades">
                            ESPECIALIDADES
                        </a>

                        <a href="#faq">
                            FAQ
                        </a>

                        <a href="#historia">
                            HISTÓRIA
                        </a>

                    </div>

                    <div className="footer-block">

                        <h3>
                            CONTATOS
                        </h3>

                        <a
                            href="mailto:dranaari@gmail.com"
                        >
                            dranaari@gmail.com
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://wa.me/5577998480100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>

                    </div>

                    <div className="footer-block">

                        <h3>
                            LOCAIS
                        </h3>

                        <p>
                            Clínica Ambir
                        </p>

                        <p>
                            Av. Jorge Teixeira, 29
                            <br />
                            Candeias
                        </p>

                        <p>
                            Hospital Samur
                        </p>

                        <p>
                            R. Sebastião Rodrigues Castro, 650
                        </p>

                    </div>

                </div>

                <div className="footer-copy">
                    © {new Date().getFullYear()} Dra. Naari Couto.
                    Todos os direitos reservados.
                </div>

            </footer>

        </section>
    );
}