import React from 'react';
import { MessageCircle } from 'lucide-react'; // Ícone no estilo WhatsApp/Conversa

function Hero() {
    return (
        <section className="hero">
            {/* Imagens de fundo e overlay */}
            <div className="hero-background">
                <img src="/images/imagemfundo1.png" alt="Cirurgia 1" />
                <img src="/images/imagemfundo2.png" alt="Cirurgia 2" />
                <img src="/images/imagemfundo3.png" alt="Cirurgia 3" />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-card">
                    <h2>
                        Cirurgiã da Pelve Feminina
                        <br />
                        Técnicas Minimamente Invasivas
                    </h2>
                    <p>
                        Dra. Naari Couto é cirurgiã geral dedicada à cirurgia pélvica minimamente invasiva. Sua atuação é voltada ao tratamento cirúrgico de doenças ginecológicas benignas, por meio de técnicas laparoscópicas e robóticas. Realiza procedimentos como retirada de útero e ovários e cirurgias para endometriose, miomas e outras doenças da pelve feminina.
                    </p>
                </div>

                <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button"
                >
                    <MessageCircle size={20} className="button-icon" />
                    <span>Agende sua consulta</span>
                </a>
            </div>

            {/* Recipiente da Foto da Médica */}
            <div className="doctor-wrapper">
                <img
                    className="doctor-image"
                    src="/images/foto_capa.png"
                    alt="Dra. Naari Couto"
                />
            </div>
        </section>
    );
}

export default Hero;