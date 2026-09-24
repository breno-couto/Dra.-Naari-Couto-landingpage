import React from 'react';
import { Activity, Scissors, ShieldCheck, Stethoscope } from 'lucide-react';

const specialties = [
    {
        icon: Scissors,
        title: 'Histerectomia',
        description:
            'Retirada cirúrgica do útero por técnicas laparoscópicas ou robóticas, com recuperação mais rápida e menos dor.',
    },
    {
        icon: Activity,
        title: 'Endometriose',
        description:
            'Diagnóstico e tratamento cirúrgico da endometriose, com foco no alívio da dor e preservação da fertilidade.',
    },
    {
        icon: ShieldCheck,
        title: 'Miomas Uterinos',
        description:
            'Miomectomia minimamente invasiva para remoção de miomas, preservando o útero sempre que possível.',
    },
    {
        icon: Stethoscope,
        title: 'Cirurgia Robótica',
        description:
            'Procedimentos realizados com auxílio de plataforma robótica, garantindo maior precisão e segurança.',
    },
];

function Specialties() {
    return (
        <section className="specialties" id="especialidades">
            <h2>Áreas de Atuação</h2>
            <div className="specialties-grid">
                {specialties.map(({ icon: Icon, title, description }) => (
                    <div className="specialty-card" key={title}>
                        <Icon size={32} className="specialty-icon" />
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Specialties;
