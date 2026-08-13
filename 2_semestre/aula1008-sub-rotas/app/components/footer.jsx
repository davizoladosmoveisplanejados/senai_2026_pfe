

import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerCol}>
          <div className={styles.brandName}>
            SESI <span>NEWS</span>
          </div>
          <p className={styles.footerText}>
            O portal oficial de notícias, eventos, esportes e projetos educacionais do SESI/SENAI.
          </p>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Navegação Rápida</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/" className={styles.footerLink}>Início</Link></li>
            <li><Link href="/categorias" className={styles.footerLink}>Categorias</Link></li>
            <li><Link href="/categorias/esportes" className={styles.footerLink}>Esportes</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Contato & Suporte</h4>
          <p className={styles.footerText}>Email: contato@sesinews.com.br</p>
          <p className={styles.footerText}>Portal Educacional SESI SP</p>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Todos os direitos reservados © {new Date().getFullYear()} - SESI News.</p>
      </div>
    </footer>
  );
}