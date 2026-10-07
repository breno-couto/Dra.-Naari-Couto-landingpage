import { Phone } from 'lucide-react';
import '../index.css';

const locais = [
    {
        nome: 'Clínica Ambir',
        endereco: 'Av. Jorge Teixeira, 29 - Candeias',
        cidade: 'Vitória da Conquista - BA',
        busca:
            'Clínica Ambir, Av. Jorge Teixeira, 29, Candeias, Vitória da Conquista - BA',
        telefone: '77 99848-0100',
        link: 'https://wa.me/5577998480100',
    },
    {
        nome: 'Hospital Samur',
        endereco: 'R. Sebastião Rodrigues Castro, 650a - Jurema',
        cidade: 'Vitória da Conquista - BA',
        busca:
            'Hospital Samur, R. Sebastião Rodrigues Castro, 650, Jurema, Vitória da Conquista - BA',
        telefone: '77 2102-8400',
        link: 'tel:+557721028400',
    },
];

export default function Locations() {
    return (
        <section className="locations" id="atendimentos">
            <div className="section-inner">
                <div className="locations-heading">
                    <h2>Locais de Atendimento</h2>
                </div>

                <div className="locations-grid">
                    {locais.map((local) => (
                        <article className="location-card" key={local.nome}>
                            <div className="location-card-header">
                                <h3>{local.nome}</h3>
                            </div>

                            <div className="location-map">
                                <iframe
                                    title={`Mapa - ${local.nome}`}
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                                        local.busca
                                    )}&output=embed`}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>

                            <div className="location-info">
                                <address className="location-address">
                                    <span>{local.endereco}</span>
                                    <span>{local.cidade}</span>
                                </address>

                                <a
                                    href={local.link}
                                    className="location-phone"
                                    target={
                                        local.link.startsWith('https://')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel="noopener noreferrer"
                                >
                                    <span className="location-phone-icon">
                                        <Phone size={18} strokeWidth={2} />
                                    </span>

                                    <span>{local.telefone}</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}