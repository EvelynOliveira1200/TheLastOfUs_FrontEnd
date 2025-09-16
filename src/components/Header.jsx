import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src="/image/logo.png"
                alt="Logo The Last of Us"
                width={220}
                height={220}
                className={styles.logo}
            />
            <nav aria-label="Menu principal">
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link href="/character">Personagens</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/weapon">Armas</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/infected">Infectados</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="#">Sobre</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="#">Pesquisar</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}