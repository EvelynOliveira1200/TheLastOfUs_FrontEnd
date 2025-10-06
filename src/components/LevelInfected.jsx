import React from "react";
import styles from "../styles/LevelInfected.module.css";

export default function LevelInfected({ threatLevel }) {
    const getThreatNumber = (level) => {
        if (typeof level === 'number') return Math.min(Math.max(level, 1), 5);

        const levelMap = level?.toString().toLowerCase() || "";

        if (levelMap.includes('baixo') || levelMap.includes('low')) return 1;
        if (levelMap.includes('moderado') || levelMap.includes('medium')) return 2;
        if (levelMap.includes('alto') || levelMap.includes('high')) return 3;
        if (levelMap.includes('extremo') || levelMap.includes('extreme')) return 4;
        if (levelMap.includes('mortal') || levelMap.includes('deadly')) return 5;

        const num = parseInt(levelMap);
        if (!isNaN(num)) return Math.min(Math.max(num, 1), 5);

        return 1;
    };

    const threatNumber = getThreatNumber(threatLevel);
    const getThreatInfo = (level) => {
        switch (level) {
            case 1: return { color: '#d4d1ce', text: 'Baixo', intensity: 'low' }; // Cinza claro
            case 2: return { color: '#f4a545', text: 'Moderado', intensity: 'medium' }; // Laranja original
            case 3: return { color: '#e89611', text: 'Alto', intensity: 'high' }; // Laranja mais escuro
            case 4: return { color: '#cc7a00', text: 'Extremo', intensity: 'extreme' }; // Laranja muito escuro
            case 5: return { color: '#b8560a', text: 'Mortal', intensity: 'deadly' }; // Laranja queimado
            default: return { color: '#666', text: 'Desconhecido', intensity: 'unknown' };
        }
    };

    const threatInfo = getThreatInfo(threatNumber);

    return (
        <div className={styles.threatContainer}>
            <div className={styles.threatLevelHeader}>
                <span className={styles.threatLabel}>Nível de Ameaça</span>
                <span className={styles.threatText} style={{ color: threatInfo.color }}>
                    {threatInfo.text}
                </span>
            </div>

            <div className={styles.threatBarContainer}>
                <div className={styles.threatBarBackground}>
                    {[1, 2, 3, 4, 5].map((level) => (
                        <div
                            key={level}
                            className={`${styles.threatBarSegment} ${level <= threatNumber ? styles.active : ''
                                } ${styles[threatInfo.intensity]}`}
                            style={{
                                '--threat-color': threatInfo.color,
                                '--segment-delay': `${level * 0.1}s`
                            }}
                        />
                    ))}
                </div>

                <div className={styles.threatParticles}>
                    {Array.from({ length: threatNumber * 2 }).map((_, index) => (
                        <div
                            key={index}
                            className={styles.particle}
                            style={{
                                '--particle-color': threatInfo.color,
                                '--particle-delay': `${index * 0.3}s`,
                                '--particle-duration': `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}