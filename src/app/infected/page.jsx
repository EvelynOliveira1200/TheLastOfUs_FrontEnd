"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InfectedCard from "../../components/InfectedCard";
import { Pagination } from 'antd';
import styles from "./infected.module.css";
import Link from "next/link";
import Header from "../../components/Header";
import cardStyles from "../../styles/Cards.module.css";
import Image from "next/image";

export default function Page() {

    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);

    const currentInfected = characters.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (current, size) => {
        setPageSize(size);
        setCurrentPage(1);
    };

    const fetchCharacters = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:4000/api/infected");
            if (response.status === 200 && Array.isArray(response.data)) {
                setCharacters(response.data);
            } else {
                console.error("Resposta inesperada:", response);
            }
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.banner}>
                <Image
                    src="/image/person.jpg"
                    alt="The Last of Us - Personagens"
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Personagens</h1>
                    <p className={styles.bannerSubtitle}>Explore os personagens inesquecíveis do universo de The Last of Us.</p>
                </div>

                <Link href="/infected">
                    <button className={styles.bannerButton}>Ver Infectados</button>
                </Link>

            </div>

            {loading && <p className="text-center">Carregando...</p>}

            <section className={styles.cenario}>
                <video
                    src="/image/cenario3.mp4"
                    className={styles.cenarioVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </section>

            <div className={cardStyles.cardsGrid}>
                {currentInfected.length > 0 ? (
                    currentInfected.map((infected) => (
                        <InfectedCard
                            key={infected.id}
                            infected={infected}
                            onClick={() => console.log(infected.name)}
                        />
                    ))
                ) : (
                    !loading && <p className="text-center">Nenhum personagem encontrado.</p>
                )}
            </div>

            <div className={styles.paginationContainer}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={characters.length}
                    onChange={handlePageChange}
                    showSizeChanger
                    onShowSizeChange={handlePageSizeChange}
                />
            </div>
        </div>
    );
}