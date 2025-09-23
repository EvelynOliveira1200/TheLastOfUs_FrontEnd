"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCards from "../../components/CharacterCards";
import { Pagination } from 'antd';
import styles from "./character.module.css";
import Image from "next/image";
import Header from "../../components/Header";

export default function Page() {

    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    const currentCharacters = characters.slice(
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
            const response = await axios.get("http://localhost:4000/api/characters");
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
            </div>

            {loading && <p className="text-center">Carregando...</p>}

            <div className={styles.cardGrid}>
                {currentCharacters.length > 0 ? (
                    currentCharacters.map((character) => (
                        <CharacterCards
                            key={character.id}
                            character={character}
                            onClick={() => console.log(character.name)}
                        />
                    ))
                ) : (
                    !loading && <p className="text-center">Nenhum personagem encontrado.</p>
                )}
            </div>

            <div className="flex justify-center mt-4">
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