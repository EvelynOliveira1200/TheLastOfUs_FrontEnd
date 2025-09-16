import React from "react";
import styles from "../styles/CardsWeapons.module.css";
import Image from "next/image";

export default function WeaponsCards({ weapon, onClick }) {
    const name = weapon?.name || "Desconhecido";
    const type = weapon?.type || "Desconhecido";
    const description = weapon?.description || "Sem descrição.";

    return (
        <div className={styles.cardContainer} onClick={onClick}>
            <div className={styles.card}>
                <Image
                    src={
                        weapon.photo
                            ? `http://localhost:3000/uploads/${weapon.photo}.jpg`
                            : "https://placehold.jp/200x200.png"
                    }
                    alt={weapon.name || "Arma"}
                    width={150}
                    height={150}
                    className={styles.jogoFoto}
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
