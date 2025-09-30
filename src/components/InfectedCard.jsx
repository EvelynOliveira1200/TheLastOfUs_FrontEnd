import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";
import Link from "next/link";

export default function InfectedCard({ infected, onClick }) {
    const name = infected?.name || "Desconhecido";
    const description = infected?.description || "Sem descrição.";
    const photo = infected?.photo;
    const threatLevel = infected?.threat_level || "N/A";
    const weaknesses = infected?.weaknesses || "N/A";

    return (
        <div className={styles.cardContainer} onClick={onClick}>
            <div className={styles.card}>
                <Image
                    src={photo ? `http://localhost:4000/uploads/${infected.photo}.jpg` : "https://placehold.jp/200x200.png"}
                    alt={name}
                    width={150}
                    height={150}
                    className={styles.cardImage}
                    unoptimized
                />
                <div className={styles.cardContent}>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.text}><span className={styles.span}>Nível de ameaça: </span>{threatLevel}</p>
                </div>
                <Link href={`/infected/${infected.id}`}>
                    <button className={styles.cardLink}>Ver Detalhes</button>
                </Link>
            </div>
        </div>
    );
}
