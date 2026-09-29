import '../index.css';

export default function About() {
    return (
        <section
            className="formation"
            id="sobre"
        >

            <div className="formation-photo-wrapper">
                <img
                    src="/images/foto_p2.png"
                    alt="Dra. Naari Couto"
                    className="formation-photo"
                />
            </div>

            <div className="formation-content">

                <h2>
                    Formação e Aperfeiçoamento
                </h2>

                <div className="formation-grid">

                    <article className="formation-card">

                        <h3>
                            Universidade
                        </h3>

                        <p>
                            Formada pela Faculdade de Medicina
                            de Petrópolis (FMP), em Petrópolis - RJ
                        </p>

                    </article>

                    <article className="formation-card">

                        <h3>
                            Residência
                        </h3>

                        <p>
                            Formada em Cirurgia Geral pelo
                            Hospital do Subúrbio, em Salvador - BA
                        </p>

                    </article>

                    <article className="formation-card">

                        <h3>
                            Pós-Graduação
                        </h3>

                        <p>
                            Cirurgia Robótica Ginecológica pelo
                            Hospital Albert Einstein, em São Paulo - SP
                        </p>

                    </article>

                </div>

            </div>

        </section>
    );
}