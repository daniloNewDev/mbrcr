import logoplaneta from "../components/img/logo-planeta.png";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.content_card}>
      <img src={logoplaneta} alt="Logotipo Planeta OMBR" />
      <div className={styles.content_text_area}>
      <h2>O Instituto</h2>
      <p>
        O Instituto da <strong>O Melhor da Brasilândia é a Criança</strong> 
        é uma solução para promover o desenvolvimento
        humano. Por meio do investimento social privado e da gestão de projetos,
        a organização inspira a prática da solidariedade. Com 5 anos de
        história, o Instituto funciona como uma via de aproximação entre pessoas
        físicas e jurídicas que têm condições e vontade de contribuir, contudo
        não sabem como fazer este investimento chegar a quem realmente precisa.
        Desta forma, a instituição conecta e articula esses dois grupos,
        assessorando empresas e direcionando recursos financeiros, humanos,
        materiais e conhecimentos técnicos a fim de promover o desenvolvimento
        social. Anualmente, investe em projetos e campanhas de educação,
        cidadania, geração de renda e desenvolvimento comunitário.
      </p>
      </div>
    </div>
  );
}

export default HomePage;
