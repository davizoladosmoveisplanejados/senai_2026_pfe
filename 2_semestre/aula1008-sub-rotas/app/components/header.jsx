import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logoBadge}>SESI</span>
          <span className={styles.logoTitle}>NEWS</span>
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>Início</Link>
            </li>
            <li>
              <Link href="/categorias" className={styles.navLink}>Categorias</Link>
            </li>
            <li>
              <Link href="/categorias/esportes" className={styles.navLink}>Esportes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}