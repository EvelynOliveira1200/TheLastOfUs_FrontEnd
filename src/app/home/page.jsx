"use client";
import styles from "./Home.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../../components/Carousel";

export default function Page() {
    const images = [
        "/image/introducao.jpg",
        "/image/intro.jpg",
        "/image/cenario.jpg",
        "/image/carrosel_2.jpg",
        "/image/carrosel_joel.jpg",
        "/image/cenario2.jpg",
    ];

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.banner}>
                <Image
                    src="/image/banner_3.jpg"
                    alt="The Last of Us"
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.bannerContent}>
                    <blockquote className={styles.bannerTitle}>
                        "Sobrevivemos... fazendo o que for preciso para sobreviver." - Joel
                    </blockquote>
                    <Link href="/character">
                        <button className={styles.bannerButton}>Explorar o Universo</button>
                    </Link>
                </div>
            </div>

            <main className={styles.main}>
                <section className={styles.introducao}>
                    <div className={styles.introducaoContent}>
                        <h2>Seja bem-vindo ao universo de <span className={styles.spanIntro}>The Last of Us</span></h2>
                        <p>
                            Aqui você vai encontrar tudo sobre uma das franquias mais
                            marcantes dos games e da cultura pop. De personagens inesquecíveis
                            a armas, infectados e momentos que emocionaram milhões de
                            jogadores pelo mundo, nosso site reúne informações, curiosidades e
                            detalhes que tornam essa história única. Prepare-se para revisitar
                            cenários pós-apocalípticos, mergulhar em narrativas profundas e
                            conhecer mais sobre Joel, Ellie e muitos outros personagens que
                            marcaram gerações. Se você é fã ou quer descobrir mais sobre esse
                            mundo, está no lugar certo!
                        </p>
                    </div>
                    <Carousel images={images} />
                </section>
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

                <section className={styles.jogos}>
                    <div className={styles.jogosContent}>
                        <h2>Conheça os Jogos</h2>
                        <p>
                            A série The Last of Us é composta por jogos aclamados pela crítica e
                            pelos fãs, desenvolvidos pela Naughty Dog e publicados pela Sony
                            Interactive Entertainment. O primeiro jogo, lançado em 2013 para o
                            PlayStation 3, rapidamente se tornou um marco na indústria, combinando
                            narrativa envolvente, personagens profundos e jogabilidade inovadora.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
