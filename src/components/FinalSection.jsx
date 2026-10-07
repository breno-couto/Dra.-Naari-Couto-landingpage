import {
    MessageCircle,
    Mail,
    MapPin,
} from 'lucide-react';

import '../index.css';

export default function FinalSection() {
    return (
        <>
            {/* =====================================================
          SEÇÃO FINAL / AGENDAMENTO
      ===================================================== */}

            <section className="final-section" id="agendamento">
                <div className="final-content">

                    {/* FOTO */}
                    <div className="final-photo-wrapper">
                        <img
                            src="/images/foto_ultima.png"
                            alt="Dra. Naari Couto"
                            className="final-photo"
                        />

                    </div>

                    {/* TEXTO */}
                    <div className="final-text">
                        <span className="final-label">
                            CUIDE-SE COM QUEM ENTENDE
                        </span>

                        <h2>
                            Sua saúde merece
                            <span> cuidado e atenção.</span>
                        </h2>

                        <p className="final-description">
                            Agende sua avaliação e tire suas dúvidas sobre o
                            tratamento mais adequado para o seu caso.
                        </p>

                        <a
                            href="https://wa.me/5577998480100"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="final-button"
                        >
                            <MessageCircle size={19} strokeWidth={2} />
                            <span>Agende sua consulta</span>
                        </a>

                    </div>
                </div>
            </section>

            {/* =====================================================
          FOOTER
      ===================================================== */}

            <footer className="footer">
                <div className="footer-content">

                    {/* MARCA */}
                    <div className="footer-brand">
                        <img
                            src="/images/nclogo.png"
                            alt="Logo Dra. Naari Couto"
                            className="footer-logo"
                        />

                        <p>
                            Cirurgia pélvica
                            <br />
                            minimamente invasiva
                        </p>
                    </div>

                    {/* MENU */}
                    <div className="footer-block">
                        <h3>MENU</h3>

                        <a href="#home">Home</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#atendimentos">Atendimentos</a>
                        <a href="#especialidades">Especialidades</a>
                        <a href="#faq">FAQ</a>
                        <a href="#historia">História</a>
                    </div>

                    {/* CONTATO */}
                    <div className="footer-block">
                        <h3>CONTATO</h3>

                        <a href="mailto:dranaari@gmail.com">
                            <Mail size={15} />
                            <span>dranaari@gmail.com</span>
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Instagram</span>
                        </a>

                        <a
                            href="https://wa.me/5577998480100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle size={15} />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    {/* LOCAIS */}
                    <div className="footer-block footer-locations">
                        <h3>LOCAIS</h3>

                        <div className="footer-location">
                            <MapPin size={16} />

                            <div>
                                <strong>Clínica Ambir</strong>

                                <p>
                                    Av. Jorge Teixeira, 29
                                    <br />
                                    Candeias
                                </p>
                            </div>
                        </div>

                        <div className="footer-location">
                            <MapPin size={16} />

                            <div>
                                <strong>Hospital Samur</strong>

                                <p>
                                    R. Sebastião Rodrigues Castro, 650
                                    <br />
                                    Jurema
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="footer-copy">
                    <span>
                        © {new Date().getFullYear()} Dra. Naari Couto
                    </span>

                    <span>
                        Todos os direitos reservados.
                    </span>
                </div>
            </footer>
        </>
    );
}