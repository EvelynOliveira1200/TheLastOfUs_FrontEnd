"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Spin } from "antd";
import axios from "axios";
import styles from "./[id].module.css";
import Header from "../../../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function WeaponDetails() {
    const [loading, setLoading] = useState(true);
    const [weapon, setWeapon] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const fetchWeapon = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/weapon/${id}`);
                const payload = res.data;
                const data = payload?.weapon || payload?.data || payload;
                setWeapon(data);
            } catch (err) {
                console.error("Erro ao buscar arma:", err);
                setWeapon(null);
            } finally {
                setLoading(false);
            }
        };

        fetchWeapon();
    }, [id]);

    const name = weapon?.name || weapon?.nome || "Desconhecido";
    const photo = weapon?.photo || "";
    const type = weapon?.type || "Desconhecido";
    const description = weapon?.description || "Sem descrição.";
    const game = weapon?.game || "Desconhecido";

    return (
        <div className={styles.container}>
            <Header />

            {loading ? (
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes da arma...</p>
                </div>
            ) : !weapon ? (
                <p className={styles.errorText}>Arma não encontrada.</p>
            ) : (
                <div className={styles.cardWrapper}>
                    <div className={styles.cardContainer}>
                        <Image
                            src={
                                photo
                                    ? `http://localhost:4000/uploads/${weapon.photo}.jpg`
                                    : "https://placehold.jp/200x200.png"
                            }
                            alt={name}
                            width={200}
                            height={200}
                            className={styles.cardImage}
                            unoptimized
                        />

                        <div className={styles.cardContent}>
                            <h1 className={styles.title_name}>{name}</h1>
                            <p className={styles.text}>{description}</p>
                            <p className={styles.text}>
                                <span className={styles.span}>Tipo: </span>
                                {type}
                            </p>
                            <p className={styles.text}>
                                <span className={styles.span}>Jogo: </span>
                                {game}
                            </p>
                             <div className={styles.buttonContainer}>
                            <Link href="/weapon">
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
