"use client";
import { useEffect, useState } from "react";
import styles from "./[id].module.css";
import Image from "next/image";
import Header from "../../../components/Header";

export default function Detalhes({ params }) {
    const { id } = params;
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/${id}`
                );
                if (!response.ok) throw new Error("Erro ao buscar personagem");
                const data = await response.json();
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image
                    src="/image/fundo6.jpg"
                    alt="fundo"
                    fill
                    className={styles.bannerImg}
                    priority
                />
            </div>

            <Header />


            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {character && (
                <div className={styles.characterDetails}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={character.image}
                            alt={character.name}
                            width={300}
                            height={300}
                            className={styles.image}
                        />

                    </div>

                    <div className={styles.cardContent}>
                        <h1 className={styles.title}>{character.name}</h1>
                        <p className={styles.text}><span className={styles.span}>Função: </span>{character.role}</p>
                        <p className={styles.text}><span className={styles.span}>Jogo: </span>{character.game}</p>
                        <p className={styles.text}><span className={styles.span}>Arma favorita: </span>{character.favoriteWeapon}</p>
                        <p className={styles.text}>{character.description}</p>
                    </div>

                </div>
            )}
        </div>
    );
}