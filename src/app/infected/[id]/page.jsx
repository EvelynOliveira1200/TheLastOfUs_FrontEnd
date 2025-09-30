"use client";
import { useEffect, useState } from "react";
import styles from "./[id].module.css";
import Image from "next/image";
import Header from "../../../components/Header";

export default function Detalhes({ params }) {
    const { id } = params;
    const [infected, setInfected] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `http://localhost:4000/api/infected/${id}`
                );
                if (!response.ok) throw new Error("Erro ao buscar infectado");
                const data = await response.json();
                setInfected(data);
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
            {infected && (
                <div className={styles.infectedDetails}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={photo ? `http://localhost:4000/uploads/${infected.photo}.jpg` : "https://placehold.jp/200x200.png"}
                            alt={name}
                            width={150}
                            height={150}
                            className={styles.cardImage}
                            unoptimized
                        />

                    </div>

                    <div className={styles.cardContent}>
                        <h1 className={styles.title}>{infected.name}</h1>
                        <p className={styles.text}><span className={styles.span}>Nível de ameaça: </span>{infected.threat_level}</p>
                        <p className={styles.text}><span className={styles.span}>Tipo: </span>{infected.type}</p>
                        <p className={styles.text}><span className={styles.span}>Fraquezas: </span>{infected.weaknesses}</p>
                        <p className={styles.text}>{infected.description}</p>
                    </div>

                </div>
            )}
        </div>
    );
}