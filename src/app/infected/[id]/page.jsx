"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Spin } from "antd";
import axios from "axios";
import styles from "./[id].module.css";
import Header from "../../../components/Header";
import Image from "next/image";
import LevelInfected from "../../../components/LevelInfected";
import Link from "next/link";

export default function InfectedDetails() {
    const [loading, setLoading] = useState(true);
    const [infected, setInfected] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const fetchInfected = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/infected/${id}`);
                const payload = res.data;
                const data = payload?.infected || payload?.data || payload;
                setInfected(data);
            } catch (err) {
                console.error("Erro ao buscar infectado:", err);
                setInfected(null);
            } finally {
                setLoading(false);
            }
        };

        fetchInfected();
    }, [id]);

    const name = infected?.name || infected?.nome || "Desconhecido";
    const photo = infected?.photo || "";
    const quotes = infected?.quotes || infected?.quote || "";
    const threat_level = infected?.threat_level || "Desconhecido";
    const weaknesses = infected?.weaknesses || "Desconhecido";
    const description = infected?.description || "Sem descrição.";

    return (
        <div className={styles.container}>
            <Header />

            {loading ? (
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes do infectado...</p>
                </div>
            ) : !infected ? (
                <p className={styles.errorText}>Infectado não encontrado.</p>
            ) : (
                <div className={styles.cardWrapper}>
                    <div className={styles.cardContainer}>
                        <Image
                            src={
                                photo
                                    ? `http://localhost:4000/uploads/${infected.photo}.jpg`
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
                                <span className={styles.span}>Fraquezas: </span>
                                {weaknesses}
                            </p>

                            <p className={styles.text}>
                                <LevelInfected threatLevel={threat_level} />
                            </p>
                            <div className={styles.buttonContainer}>
                            <Link href="/infected">
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
