import logoplaneta from "../components/img/logo-planeta.png";
import frentedecasa from "../components/img/atividadenarua.png";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.content_card}>
        <img className={styles.logoplanet} src={logoplaneta} alt="Logotipo Planeta OMBR" />
        <div className={styles.content_text_area}>
          <h2>O Instituto e a Comunidade</h2>
          <p>
            Por iniciativa dos moradores da Comunidade da Vila Brasilândia, ocorreu uma mobilização
            social que visava atender a necessidade de olhar com mais atenção para o espaço das crianças do bairro, no sentido recreativo, esportivo e educativo. Dessa parceria de sucesso nasceu o projeto O Melhor da Brasilândia é a Criança, trazendo para a comunidade atividades recreativas, atrações musicais, comida e bebidas para celebrar o evento, providenciados com toda a atenção e carinho pelos colaboradores da instituição.
            Hoje seguindo pelo 5° ano consecutivo, o Instituto O Melhor da Brasilândia é a Criança vem fazendo a diferença para a comunidade, antes sem acesso local às atividades culturais como música, teatro, brinquedos de playground, atividades recreativas, entre outras atividades e brincadeiras para todas as idades.
          </p>
        </div>
      </div>

      <div className={styles.content_card}>
        <div className={styles.content_text_area_2}>
          <h2>Acesso ao Lazer em frente de Casa!</h2>
          <p>
            Neste dia das Crianças o que não vai faltar é atividade! Muita música, brinquedos como Pula-pula, piscina de bolinhas, Cama-Elástica. Animadores vestidos de Personagens, alimentação, além de todo apoio da Equipe de Primeiros-Socorros e nossos colaboradores. Venham fazer parte e doar conhecimento e ajuda para que juntos possamos continuar transformando nossa comunidade com vida!
          </p>
        </div>
        <img className={styles.frentedecasa} src={frentedecasa} alt="Logotipo Planeta OMBR" />
      </div>

    </>
  );
}

export default HomePage;
