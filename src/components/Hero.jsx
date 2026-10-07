import { MessageCircle } from 'lucide-react';
import '../index.css';

export default function Hero() {
    return (
        <section className="hero" id="home">

            <div
                className="hero-background"
                aria-hidden="true"
            >
                <div className="bg-grid">

                    <img
                        src="/images/imagemfundo1.png"
                        alt=""
                    />

                    <img
                        src="/images/imagemfundo2.png"
                        alt=""
                    />

                    <img
                        src="/images/imagemfundo3.png"
                        alt=""
                    />

                </div>

                <div className="hero-overlay" />
            </div>

            <div className="hero-container">

                <div className="hero-content">

                    <div className="hero-card">

                        <h1 className="hero-title">
                            <span>
                                Cirurgiã da Pelve Feminina
                            </span>
                        </h1>

                        <h1 className="hero-subtitle">
                            <span>
                                Técnicas Minimamente Invasivas
                            </span>
                        </h1>

                        <p className="hero-text">
                            Dra. Naari Couto é cirurgiã geral
                            dedicada à cirurgia pélvica
                            minimamente invasiva. Sua atuação é
                            voltada ao tratamento cirúrgico de
                            doenças ginecológicas benignas, por
                            meio de técnicas laparoscópicas e
                            robóticas. Realiza procedimentos
                            como retirada de útero e ovários e
                            cirurgias para endometriose, miomas
                            e outras doenças da pelve feminina.
                        </p>

                    </div>

                    <a
                        href="https://wa.me/5577998480100"
                        target="_blank"
                         rel="noopener noreferrer"
                        className="hero-button"
                    >
                        <img
                            src="/images/whatsapp.png"
                            alt=""
                            className="hero-button-icon"
                    />

                        <span>
                            Agende sua consulta
                        </span>

                    </a>

                </div>

                <div className="doctor-wrapper">
                    <img
                        className="doctor-image"
                        src="/images/foto_capa.png"
                        alt="Dra. Naari Couto"
                    />
                </div>

            </div>

        </section>
    );
}