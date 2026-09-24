import React from 'react';
import { GraduationCap, Award, HeartHandshake } from 'lucide-react';

function About() {
    return (
        <section className="about" id="sobre">
            <div className="about-image">
                <img
                    src="/images/foto_sobre.png"
                    alt="Dra. Naari Couto em consultório"
                />
            </div>

            <div className="about-content">
                <h2>Sobre a Dra. Naari Couto</h2>
                <p>
                    Cirurgiã geral com dedicação à cirurgia pélvica minimamente invasiva,
                    a Dra. Naari Couto se especializou no tratamento de doenças
                    ginecológicas benignas por meio de técnicas laparoscópicas e
                    robóticas, sempre priorizando a segurança e a recuperação mais
                    rápida das pacientes.
                </p>
                <p>
                    Seu trabalho une precisão técnica a um atendimento humanizado,
                    acompanhando cada paciente de forma individualizada, do
                    diagnóstico ao pós-operatório.
                </p>

                <ul className="about-highlights">
                    <li>
                        <GraduationCap size={20} />
                        <span>Especialista em Cirurgia Pélvica Minimamente Invasiva</span>
                    </li>
                    <li>
                        <Award size={20} />
                        <span>CRM 00000 - UF</span>
                    </li>
                    <li>
                        <HeartHandshake size={20} />
                        <span>Atendimento humanizado e individualizado</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
