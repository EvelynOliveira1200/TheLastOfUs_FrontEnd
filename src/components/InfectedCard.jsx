import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";

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
                    className={styles.jogoFoto}
                    unoptimized
                />
                <div className={styles.cardContent}>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.text}><span className={styles.span}>Nível de ameaça: </span>{threatLevel}</p>
                    <p className={styles.text}><span className={styles.span}>Fraquezas: </span>{weaknesses}</p>
                    <p className={styles.text}>{description}</p>
                </div>
            </div>
        </div>
    );
}
