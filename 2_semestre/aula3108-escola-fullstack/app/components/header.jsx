import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <h1>
                    <span className="accent">SESI</span> Escola
                </h1>
                <nav>
                    <ul>
                        <li><Link href='/' className="active">Início</Link></li>
                        <li><Link href='/cadaluno'>Cadastro Alunos</Link></li>
                        <li><Link href='/listaluno'>Lista Alunos</Link></li>
                        <li><Link href='/notaluno'>Cadastro Notas</Link></li>
                        <li><Link href='/listanota'>Lista Notas</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};