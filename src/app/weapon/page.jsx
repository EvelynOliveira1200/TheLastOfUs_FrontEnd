"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import WeaponsCards from "../../components/WeaponsCards";
import { Pagination } from 'antd';
import styles from "./weapon.module.css";
import Link from "next/link";

export default function Page() {

    const [loading, setLoading] = useState(false);
    const [weapons, setWeapons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

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
            const response = await axios.get("http://localhost:3000/api/weapons");
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

            {loading && <p className="text-center">Carregando...</p>}

            <div className={styles.cardGrid}>
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

            <div className="flex justify-center mt-4">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={weapons.length}
                    onChange={handlePageChange}
                    showSizeChanger
                    onShowSizeChange={handlePageSizeChange}
                />
            </div>

            <Link href="/infected">Ver todos os infectados</Link>
        </div>
    );
}