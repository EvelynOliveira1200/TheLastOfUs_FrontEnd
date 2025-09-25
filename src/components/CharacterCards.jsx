import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CharacterCardsList({ character, onClick }) {
    const name = character?.name || "Desconhecido";
    const photo = character?.photo;
    const quotes = character?.quotes || "";
    return (
        <div className={styles.cardContainer} onClick={() => onClick && onClick(character)}>
            <div className={styles.card}>
                <Image
                    src={photo ? `http://localhost:4000/uploads/${character.photo}.jpg` : "https://placehold.jp/200x200.png"}
                    alt={name}
                    width={150}
                    height={150}
                    className={styles.cardImage}
                    unoptimized
                />
                <div className={styles.cardContent}>
                    <h1 className={styles.title}>{name}</h1>
                    {quotes && <p className={styles.text}>{quotes}</p>}
                </div>
                <Link href={`/characters/${character.id}`}>
                    <button className={styles.cardLink}>Ver Detalhes</button>
                </Link>
            </div>
        </div>
    );
}
