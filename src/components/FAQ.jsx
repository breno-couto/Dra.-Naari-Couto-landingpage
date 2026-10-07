import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import '../index.css';

const perguntas = [
    {
        pergunta: 'Preciso ter um diagnóstico antes de marcar a consulta?',
        resposta:
            'Não. A consulta é justamente o momento para avaliar seus sintomas, histórico clínico e exames, quando houver, e orientar a melhor conduta para cada caso.',
    },
    {
        pergunta: 'A Dra. Naari realiza acompanhamento ginecológico?',
        resposta:
            'A Dra. Naari atua principalmente na área de cirurgia pélvica minimamente invasiva, realizando avaliação e acompanhamento de condições ginecológicas que podem necessitar de tratamento cirúrgico.',
    },
    {
        pergunta: 'A consulta é aberta para qualquer plano de saúde?',
        resposta:
            'O atendimento e as condições de cobertura podem variar de acordo com cada plano. Entre em contato para confirmar as opções disponíveis.',
    },
    {
        pergunta: 'Meu convênio cobre cirurgia robótica?',
        resposta:
            'A cobertura de procedimentos depende das condições do convênio e do caso clínico. A indicação e as possibilidades de cobertura são avaliadas individualmente.',
    },
    {
        pergunta: 'O valor da consulta inclui retorno?',
        resposta:
            'As condições de retorno podem variar conforme o atendimento. Entre em contato para obter informações atualizadas sobre valores e condições da consulta.',
    },
];

export default function FAQ() {
    const [aberta, setAberta] = useState(null);

    function alternarPergunta(index) {
        setAberta(aberta === index ? null : index);
    }

    return (
        <section className="faq" id="faq">
            <div className="faq-container">

                <div className="faq-heading">
                    <span className="faq-label">
                        FAQ
                    </span>

                    <h2>
                        Perguntas frequentes
                    </h2>

                </div>

                <div className="faq-list">
                    {perguntas.map((item, index) => {
                        const isOpen = aberta === index;

                        return (
                            <div
                                className={`faq-item ${isOpen ? 'open' : ''}`}
                                key={item.pergunta}
                            >
                                <button
                                    type="button"
                                    className="faq-question"
                                    onClick={() => alternarPergunta(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span>{item.pergunta}</span>

                                    <span className="faq-icon-wrapper">
                                        <ChevronDown
                                            size={18}
                                            strokeWidth={2}
                                            className="faq-icon"
                                        />
                                    </span>
                                </button>

                                {isOpen && (
                                    <div
                                        className="faq-answer"
                                        id={`faq-answer-${index}`}
                                    >
                                        <p>{item.resposta}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="faq-footer">
                    <span>
                        Ainda ficou com alguma dúvida?
                    </span>

                    <a
                        href="https://wa.me/5577998480100"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Entre em contato pelo WhatsApp
                    </a>
                </div>

            </div>
        </section>
    );
}