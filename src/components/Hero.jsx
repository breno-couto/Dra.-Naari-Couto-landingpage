import React from 'react';
import { MessageCircle } from 'lucide-react';

function Hero() {
    return (
        <section className="hero" id="home">
            {/* Imagens de Fundo e Overlay de Proteção */}
            <div className="hero-background">
                <div className="bg-grid">
                    <img src="/images/imagemfundo1.png" alt="Cirurgia laparoscópica" />
                    <img src="/images/imagemfundo2.png" alt="Equipe médica" />
                    <img src="/images/imagemfundo3.png" alt="Procedimento pélvico" />
                </div>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-container">
                {/* Bloco de Texto / Card Principal */}
                <div className="hero-content">
                    <div className="hero-card">
                        <h1 className="hero-title">
                            Cirurgiã da Pelve Feminina
                            <span className="hero-subtitle">Técnicas Minimamente Invasivas</span>
                        </h1>
                        <p className="hero-text">
                            Dra. Naari Couto é cirurgiã geral dedicada à cirurgia pélvica minimamente invasiva.
                            Sua atuação é voltada ao tratamento cirúrgico de doenças ginecológicas benignas,
                            por meio de técnicas laparoscópicas e robóticas. Realiza procedimentos como
                            retirada de útero e ovários e cirurgias para endometriose, miomas e outras doenças da pelve feminina.
                        </p>
                    </div>

                    {/* Botão de Agendamento */}
                    <a
                        href="https://wa.me/5500000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-button"
                    >
                        <MessageCircle size={22} className="button-icon" />
                        <span>Agende sua consulta</span>
                    </a>
                </div>

                {/* Imagem em Destaque da Médica */}
                <div className="doctor-wrapper">
                    <img
                        className="doctor-image"
                        src="/images/foto_capa.png"
                        alt="Dra. Naari Couto - Cirurgiã Pélvica"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
