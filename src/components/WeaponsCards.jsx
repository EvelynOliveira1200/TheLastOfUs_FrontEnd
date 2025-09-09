import React from "react";
import styles from "../styles/CardsWeapons.module.css";
import Image from "next/image";

export default function WeaponsCards({ weapon, onClick }) {
    const imageUrl = weapon?.photo || "https://placehold.jp/200x200.png";
    const name = weapon?.name || "Desconhecido";
    const type = weapon?.type || "Desconhecido";
    const description = weapon?.description || "Sem descrição.";

    return (
        <div className={styles.cardContainer} onClick={onClick}>
            <div className={styles.card}>
                <Image
                    src={imageUrl}
                    alt={name}
                    className={styles.cardImage}
                    width={300}
                    height={300}
                />
                <div className={styles.cardContent}>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.text}><span className={styles.span}>Tipo: </span>{type}</p>
                    <p className={styles.text}>{description}</p>
                </div>
            </div>
        </div>
    );
}
