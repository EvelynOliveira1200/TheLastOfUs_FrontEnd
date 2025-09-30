"use client";

import { useState, useEffect, use } from "react";
import { Spin } from "antd";;
import axios from "axios";
import styles from "./[id].module.css";
import Header from "../../../components/Header";
import Image from "next/image";

export default function characterDetails({ params }) {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState(null);


    const name = character?.name || "Desconhecido";
    const photo = character?.photo;
    const quotes = character?.quotes || "";
    const favorite_weapon = character?.favorite_weapon || "Desconhecido";
    const role = character?.role || "Desconhecido";
    const description = character?.description || "Sem descrição.";
    const game = character?.game || "Desconhecido";


    const resolvedParams = use(params);

    // Função simplificada para buscar personagem
    const fetchCharacters = async (characterId) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/characters/${characterId}`);
            setCharacter(response.data);
        } catch (error) {
            console.error("Erro ao buscar personagem:", error);
            setCharacter(null);
        } finally {
            setLoading(false);
        }
    };

    // Executa a busca quando o componente carrega
    useEffect(() => {
        if (resolvedParams?.id) {
            fetchCharacters(resolvedParams.id);
        }
    }, [resolvedParams?.id]);

    // Tela de carregamento
    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes do usuário...</p>
                </div>
            </div>
        );
    }

    // Conteúdo principal
    return (
        <div className={styles.container}>
            {/* Cabeçalho com botão voltar */}
            
            <Header />

            <div className={styles.content}>
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
                    <p className={styles.text}><span className={styles.span}>Arma Favorita: </span>{favorite_weapon}</p>
                    <p className={styles.text}><span className={styles.span}>Papel: </span>{role}</p>
                    <p className={styles.text}><span className={styles.span}>Jogo: </span>{game}</p>
                    <p className={styles.text}>{description}</p>
                </div>
            </div>
        </div>
    );
}