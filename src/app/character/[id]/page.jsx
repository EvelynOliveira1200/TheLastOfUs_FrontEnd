
"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Spin } from "antd";
import axios from "axios";
import styles from "./[id].module.css";
import Header from "../../../components/Header";
import Image from "next/image";

export default function CharacterDetails() {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const fetchCharacter = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/characters/${id}`);
                const payload = res.data;
                const data = payload?.character || payload?.data || payload;
                setCharacter(data);
            } catch (err) {
                console.error("Erro ao buscar personagem:", err);
                setCharacter(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    const name = character?.name || character?.nome || "Desconhecido";
    const photo = character?.photo || "";
    const quotes = character?.quotes || character?.quote || "";
    const favorite_weapon =
        character?.favorite_weapon || character?.favoriteWeapon || "Desconhecido";
    const role = character?.role || "Desconhecido";
    const description = character?.description || "Sem descrição.";
    const game = character?.game || "Desconhecido";

    return (
        <div className={styles.container}>
            <Header />

            {loading ? (
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes do personagem...</p>
                </div>
            ) : !character ? (
                <p className={styles.errorText}>Personagem não encontrado.</p>
            ) : (
                <div className={styles.cardWrapper}>
                    <div className={styles.cardContainer}>
                        <Image
                            src={
                                photo
                                    ? `http://localhost:4000/uploads/${character.photo}.jpg`
                                    : "https://placehold.jp/200x200.png"
                            }
                            alt={name}
                            width={150}
                            height={150}
                            className={styles.cardImage}
                            unoptimized
                        />

                        <div className={styles.cardContent}>
                            <h1 className={styles.title_name}>{name}</h1>

                            {quotes && <p className={styles.text}>{quotes}</p>}
                            <p className={styles.text}>{description}</p>

                            <p className={styles.text}>
                                <span className={styles.span}>Arma Favorita: </span>
                                {favorite_weapon}
                            </p>

                            <p className={styles.text}>
                                <span className={styles.span}>Papel: </span>
                                {role}
                            </p>

                            <p className={styles.text}>
                                <span className={styles.span}>Jogo: </span>
                                {game}
                            </p>
                            <div className={styles.buttonContainer}>
                            <Link href="/character">
                                <button className={styles.backButton}>Voltar</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
