import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { Modal, Input, List } from "antd";

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    async function handleSearch(e) {
        const value = e.target.value;
        setSearch(value);
        if (value.length < 2) {
            setResults([]);
            return;
        }
        try {
            const [charRes, weaponRes, infectedRes] = await Promise.all([
                fetch(`http://localhost:4000/api/characters?search=${value}`),
                fetch(`http://localhost:4000/api/weapons?search=${value}`),
                fetch(`http://localhost:4000/api/infected?search=${value}`)
            ]);
            const [charData, weaponData, infectedData] = await Promise.all([
                charRes.json(), weaponRes.json(), infectedRes.json()
            ]);
            const chars = Array.isArray(charData?.characters) ? charData.characters : charData;
            const weapons = Array.isArray(weaponData?.weapons) ? weaponData.weapons : weaponData;
            const infecteds = Array.isArray(infectedData?.infected) ? infectedData.infected : infectedData;
            const allResults = [
                ...chars.map(item => ({ type: "Personagem", id: item.id, name: item.name || item.nome })),
                ...weapons.map(item => ({ type: "Arma", id: item.id, name: item.name || item.nome })),
                ...infecteds.map(item => ({ type: "Infectado", id: item.id, name: item.name || item.nome }))
            ];
            setResults(allResults);
        } catch (err) {
            setResults([]);
        }
    }

    function handleResultClick(result) {
        setSearch("");
        setShowSearch(false);
        if (result.type === "Personagem") window.location.href = `/character/${result.id}`;
        if (result.type === "Arma") window.location.href = `/weapon/${result.id}`;
        if (result.type === "Infectado") window.location.href = `/infected/${result.id}`;
    }

    return (
        <header className={styles.header}>
            <Image
                src="/image/logo.png"
                alt="Logo The Last of Us"
                width={220}
                height={220}
                className={styles.logo}
            />
            <nav aria-label="Menu principal">
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link href="/character">Personagens</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/weapon">Armas</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="/infected">Infectados</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link href="#">Sobre</Link>
                    </li>
                    <li className={styles.menuItem}>
                        <button
                            type="primary"
                            className={styles.searchButton}
                            onClick={() => setShowSearch(true)}
                        >
                            Pesquisar
                        </button>
                    </li>
                </ul>
            </nav>
            <Modal
                title="Pesquisar personagem, arma ou infectado"
                open={showSearch}
                onCancel={() => setShowSearch(false)}
                footer={null}
                centered
                className={styles.headerSearchModal}
            >
                <Input
                    placeholder="Digite para pesquisar..."
                    value={search}
                    onChange={handleSearch}
                    autoFocus
                    className={styles.headerSearchInput}
                />
                <List
                    bordered
                    className={styles.headerSearchResults}
                    dataSource={results}
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                    renderItem={item => (
                        <List.Item
                            className={styles.headerSearchResultItem}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleResultClick(item)}
                        >
                            <div className={styles.line}>
                            <span className={styles.headerSearchResultType}>{item.type}:</span> 
                            <p className={styles.headerSearchResultName}>{item.name}</p>
                            </div>
                        </List.Item>
                    )}
                    locale={{ emptyText: search.length > 1 ? "Nenhum resultado encontrado." : "" }}
                />
            </Modal>
        </header>
    );
}