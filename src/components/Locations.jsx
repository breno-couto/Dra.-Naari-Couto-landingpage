import { MessageCircle, Phone } from 'lucide-react';
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
        icone: 'whatsapp',
    },
    {
        nome: 'Hospital Samur',
        endereco: 'R. Sebastião Rodrigues Castro, 650a - Jurema',
        cidade: 'Vitória da Conquista - BA',
        busca:
            'Hospital Samur, R. Sebastião Rodrigues Castro, 650, Jurema, Vitória da Conquista - BA',
        telefone: '77 2102-8400',
        link: 'tel:+557721028400',
        icone: 'phone',
    },
];

export default function Locations() {
    return (
        <section className="locations" id="atendimentos">
            <div className="section-inner">
                <h2>Locais de Atendimento</h2>

                <div className="locations-grid">
                    {locais.map((local) => (
                        <article className="location-card" key={local.nome}>
                            <h3>{local.nome}</h3>

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

                            <address className="location-address">
                                {local.endereco}
                                <br />
                                {local.cidade}
                            </address>

                            <a
                                href={local.link}
                                className="location-phone"
                                target={
                                    local.icone === 'whatsapp' ? '_blank' : undefined
                                }
                                rel="noopener noreferrer"
                            >
                                {local.icone === 'whatsapp' ? (
                                    <MessageCircle size={16} />
                                ) : (
                                    <Phone size={16} />
                                )}

                                <span>{local.telefone}</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}