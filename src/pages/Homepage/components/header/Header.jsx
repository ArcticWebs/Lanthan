import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <section className={clsx("container", styles.mainHeaderSection)}>
        <div className={styles.mainHeaderContent}>
          <h1>Pasja do elektroniki.</h1>
          <p>Od 15 lat.</p>
          <a href="#services" className={styles.mainHeaderButton}>
            Oferta
          </a>
        </div>
      </section>
      <div className={styles.mainHeaderOverlay}></div>
    </header>
  );
};

export default Header;
