import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./img/logotipo-site.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src={logo}
          alt="O Melhor da Brasilândia é a criança"
        />
      </div>
      <div className={styles.link_list}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contacts">Contatos</Link>
        <Link to="/about">Sobre</Link>
      </div>
    </nav>
  );
}

export default Navbar;
