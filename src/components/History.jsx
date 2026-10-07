import '../index.css';

export default function History() {
    return (
        <section className="history" id="historia">
            <div className="history-content">

                <div className="history-panel">

                    <div className="history-text">
                        <span className="history-label">TRAJETÓRIA</span>

                        <h2>
                            Minha história vai além da cirurgia
                        </h2>

                        <p>
                            Minha jornada começou ainda na graduação em Medicina.
                            Ao longo da formação em Cirurgia Geral, descobri uma
                            área que unia conhecimento, precisão e, principalmente,
                            propósito: o cuidado com a saúde da mulher.
                        </p>

                        <p>
                            Foi dessa aproximação que nasceu minha dedicação à
                            cirurgia pélvica feminina. A laparoscopia e,
                            posteriormente, a cirurgia robótica ampliaram minhas
                            possibilidades de oferecer procedimentos minimamente
                            invasivos, seguros e individualizados.
                        </p>

                        <p>
                            Hoje, minha atuação é guiada pela técnica e pela
                            escuta. Acredito que cada mulher possui uma história
                            única e que cuidar vai muito além de tratar uma doença.
                        </p>

                        <div className="history-highlight">
                            <span className="history-line"></span>

                            <span>
                                Cuidado que une técnica, precisão e escuta.
                            </span>
                        </div>
                    </div>

                </div>

                <div className="history-photo-area">

                    <div className="history-photo-decoration"></div>

                    <div className="history-photo-wrapper">
                        <img
                            src="/images/foto_historia.png"
                            alt="Dra. Naari Couto"
                            className="history-photo"
                        />
                    </div>

                    <span className="history-photo-caption">
                        Cirurgia pélvica minimamente invasiva
                    </span>

                </div>

            </div>
        </section>
    );
}