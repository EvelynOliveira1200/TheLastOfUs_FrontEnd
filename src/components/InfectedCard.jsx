import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";
import Link from "next/link";
import LevelInfected from "./LevelInfected";

export default function InfectedCard({ infected, onClick }) {
    const name = infected?.name || "Desconhecido";
    const photo = infected?.photo;
    const threatLevel = infected?.threat_level || "N/A";
    const id = infected?._id || infected?.id;

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
                    <LevelInfected threatLevel={threatLevel} />
                </div>
                <Link href={`/infected/${id}`}>
                    <button className={styles.cardLink}>Ver Detalhes</button>
                </Link>
            </div>
        </div>
    );
}
