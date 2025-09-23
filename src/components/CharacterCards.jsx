import React from "react";
import styles from "../styles/Cards.module.css";
import Image from "next/image";

export default function CharacterCardsList({ characters, onClick }) {
    return (
        <div className={styles.cardsGrid}>
            {characters.map((character) => {
                const name = character?.name || "Desconhecido";
                const photo = character?.photo;
                const quotes = character?.quotes || "";
                return (
                    <div className={styles.cardContainer} key={character.id} onClick={() => onClick && onClick(character)}>
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
                                {quotes && <p className={styles.text}><span className={styles.span}>Frases: </span>{quotes}</p>}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
