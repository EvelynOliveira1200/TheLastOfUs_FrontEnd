"use client";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import styles from "../styles/Carousel.module.css";

export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={styles.carousel}>
            {images.map((src, index) => {
                const pos = (index - currentIndex + images.length) % images.length;

                if (pos > 2) return null;

                let translateX = (pos - 1) * 180;
                let translateY = pos === 1 ? 0 : 15;
                let scale = pos === 1 ? 1.2 : 0.85;
                let zIndex = pos === 1 ? 3 : 2;
                let opacity = pos === 1 ? 1 : 0.75;
                let rotateY = pos === 0 ? -20 : pos === 2 ? 20 : 0;

                return (
                    <div
                        key={index}
                        className={styles.carouselItem}
                        style={{
                            transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                            zIndex,
                            opacity,
                            transition: "all 0.6s ease-in-out",
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Slide ${index}`}
                            width={200}
                            height={280}
                            className={styles.carouselImage}
                        />
                    </div>
                );
            })}
        </div>
    );
}