import React from "react";
import styles from "../styles/CardsWeapons.module.css";
import Image from "next/image";

export default function CharacterCards({ character, onClick }) {
    const name = character?.name || "Desconhecido";
    const description = character?.description || "Sem descrição.";
    const role = character?.role || "N/A";
    const game = character?.game || "N/A";
    const photo = character?.photo;
    const quotes = character?.quotes || "";
    const favoriteWeapon = character?.weapon_name || "N/A";

    return (
        <div className={styles.cardContainer} onClick={onClick}>
            <div className={styles.card}>
                <Image
                    src={photo ? `http://localhost:3000/uploads/${character.photo}.jpg` : "https://placehold.jp/200x200.png"}
                    alt={name}
                    width={150}
                    height={150}
                    className={styles.jogoFoto}
                    unoptimized
                />
                <div className={styles.cardContent}>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.text}><span className={styles.span}>Função: </span>{role}</p>
                    <p className={styles.text}><span className={styles.span}>Jogo: </span>{game}</p>
                    <p className={styles.text}><span className={styles.span}>Arma favorita: </span>{favoriteWeapon}</p>
                    {quotes && <p className={styles.text}><span className={styles.span}>Frases: </span>{quotes}</p>}
                    <p className={styles.text}>{description}</p>
                </div>
            </div>
        </div>
    );
}
