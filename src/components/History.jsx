import '../index.css';

export default function History() {
    return (
        <section
            className="history"
            id="historia"
        >
            <div className="history-content">

                <div className="history-text">

                    <h2>
                        Minha História: além de cirurgia,
                        uma mulher
                    </h2>

                    <p>
                        Minha jornada profissional começou ainda
                        na graduação da Faculdade de Medicina.
                        Desde então, aprofundei-me em uma área que
                        me trouxe paixão, conhecimento e, acima de
                        tudo, propósito.
                    </p>

                    <p>
                        Durante a formação em Cirurgia Geral,
                        compreendi a importância de ouvir as
                        mulheres e respeitar suas histórias.
                        Foi essa aproximação que despertou em mim
                        o desejo de seguir uma trajetória dedicada
                        à cirurgia pélvica feminina.
                    </p>

                    <p>
                        A laparoscopia e posteriormente a cirurgia
                        robótica ampliaram minhas possibilidades
                        de oferecer procedimentos mais precisos,
                        seguros e adequados às particularidades
                        de cada paciente.
                    </p>

                    <p>
                        Hoje, dedico minha atuação à cirurgia
                        pélvica minimamente invasiva, unindo
                        conhecimento técnico, cuidado individualizado
                        e atenção às necessidades de cada mulher.
                    </p>

                    <p>
                        Acredito que cada paciente possui uma
                        história única e que o cuidado deve
                        considerar não apenas a doença, mas também
                        a pessoa que está diante de mim.
                    </p>

                </div>

                <div className="history-photo-wrapper">

                    <img
                        src="/images/foto_historia.png"
                        alt="Dra. Naari Couto"
                        className="history-photo"
                    />

                </div>

            </div>
        </section>
    );
}