"use client";
import styles from "./Home.module.css";
import Header from "../../components/Header";
import Image from "next/image";

export default function Page() {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.banner}>
                <Image src="/image/banner0.jpg" alt="The Last of Us" layout="fill" objectFit="cover"/>
            </div>
            <main className={styles.main}>
                
                <h1 className={styles.title}>Bem-vindo ao The Last of Us</h1>
                <p className={styles.description}>
                    Explore o universo de The Last of Us, conheça os personagens, armas e infectados.
                </p>
            </main>
        </div>
    );
}
