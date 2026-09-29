import '../index.css';

export default function Differentials() {
  return (
    <section className="differentials" id="especialidades">
      <div className="differentials-layout">

        <div className="differentials-photo-wrapper">
          <img
            src="/images/imagemfundo2.png"
            alt="Dra. Naari Couto em centro cirúrgico"
            className="differentials-photo"
          />
        </div>

        <article className="diff-card diff-tl">
          <h3>Atendimento Exclusivo</h3>
          <p>
            Consultas com tempo dedicado para ouvir você. Atendimento
            particular e convênios, com agilidade na marcação e suporte
            contínuo ao paciente.
          </p>
        </article>

        <article className="diff-card diff-tr">
          <h3>Planejamento Cirúrgico</h3>
          <p>
            Desde a primeira avaliação o planejamento cirúrgico é
            individualizado, com os cuidados definidos de acordo com a
            particularidade de cada paciente.
          </p>
        </article>

        <article className="diff-card diff-bl">
          <h3>Procedimentos</h3>
          <p>
            Atuação focada em Endometriose, Adenomiose, Miomas Uterinos e
            Cistos Ovarianos para garantir segurança e o mínimo de invasão.
          </p>
        </article>

        <article className="diff-card diff-br">
          <h3>Técnicas Utilizadas</h3>
          <p>
            Técnicas Minimamente Invasivas através da Cirurgia Robótica para
            casos complexos ou Laparoscópica em casos selecionados.
          </p>
        </article>

      </div>
    </section>
  );
}