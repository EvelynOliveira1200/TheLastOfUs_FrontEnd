"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InfectedCard from "../../components/InfectedCard";
import { Pagination } from 'antd';
import styles from "./infected.module.css";
import Link from "next/link";

export default function Page() {

    const [loading, setLoading] = useState(false);
    const [infected, setInfected] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    const currentInfected = infected.slice(
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

    const fetchInfected = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/api/infected");
            if (response.status === 200 && Array.isArray(response.data)) {
                setInfected(response.data);
            } else {
                console.error("Resposta inesperada:", response);
            }
        } catch (error) {
            console.error("Erro ao buscar infectados:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInfected();
    }, []);

    return (
        <div className={styles.container}>

            {loading && <p className="text-center">Carregando...</p>}

            <div className={styles.cardGrid}>
                {currentInfected.length > 0 ? (
                    currentInfected.map((infected) => (
                        <InfectedCard
                            key={infected.id}
                            infected={infected}
                            onClick={() => console.log(infected.name)}
                        />
                    ))
                ) : (
                    !loading && <p className="text-center">Nenhum infectado encontrado.</p>
                )}
            </div>

            <div className="flex justify-center mt-4">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={infected.length}
                    onChange={handlePageChange}
                    showSizeChanger
                    onShowSizeChange={handlePageSizeChange}
                />
            </div>

            <Link href="/character">Ver todos os personagens</Link>
        </div>
    );
}