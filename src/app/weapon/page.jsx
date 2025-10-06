"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeaponsCards from "../../components/WeaponsCards";
import { Pagination } from 'antd';
import styles from "./Weapon.module.css";
import Link from "next/link";
import Header from "../../components/Header";
import cardStyles from "../../styles/Cards.module.css";
import Image from "next/image";

export default function Page() {

    const [loading, setLoading] = useState(false);
    const [weapons, setWeapons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);

    const currentWeapons = weapons.slice(
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

    const fetchWeapons = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:4000/api/weapons");
            if (response.status === 200 && Array.isArray(response.data)) {
                setWeapons(response.data);
            } else {
                console.error("Resposta inesperada:", response);
            }
        } catch (error) {
            console.error("Erro ao buscar armas:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeapons();
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.banner}>
                <Image
                    src="/image/person.jpg"
                    alt="The Last of Us - Armas"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>Armas</h1>
                    <p className={styles.bannerSubtitle}>Explore o arsenal de sobrevivência do universo de The Last of Us.</p>
                    
                    <Link href="/character">
                        <button className={styles.bannerButton}>Ver Personagens</button>
                    </Link>
                </div>
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
                {currentWeapons.length > 0 ? (
                    currentWeapons.map((weapon) => (
                        <WeaponsCards
                            key={weapon.id}
                            weapon={weapon}
                            onClick={() => console.log(weapon.name)}
                        />
                    ))
                ) : (
                    !loading && <p className="text-center">Nenhuma arma encontrada.</p>
                )}
            </div>

            <div className={styles.paginationContainer}>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={weapons.length}
                    onChange={handlePageChange}
                    showSizeChanger
                    onShowSizeChange={handlePageSizeChange}
                />
            </div>
        </div>
    );
}

