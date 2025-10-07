"use client";

// ...existing code...
import styles from "./Sobre.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Footer from "../../components/Footer";

export default function SobreMim() {

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.cardWrapper}>
                <div className={styles.cardContainer}>
                    <Image
                        src={"/image/perfil_img.jpeg"}
                        alt="Perfil - Evelyn Gonçalves"
                        width={150}
                        height={150}
                        className={styles.cardImage}
                    />

                    <div className={styles.cardContent}>
                        <h1 className={styles.title_name}>Evelyn Gonçalves de Oliveira</h1>
                        <p className={styles.text}>
                            Essa é a desenvolvedora desse site. Tem 18 anos, está cursando o 3º ano do ensino médio
                            e o 2º ano do curso técnico em Desenvolvimento de Sistemas. Este projeto foi criado pelo
                            Felipe Santos como desafio para avaliar as habilidades dos alunos.
                        </p>

                        <div className={styles.contactContainer}>
                            <h2 className={styles.title}>Contato</h2>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <a href="mailto:evelyn.g.oliveira7@aluno.senai.br" className={styles.contactLink}>
                                        <MdEmail className={styles.icon} />
                                        <span>evelyn.g.oliveira7@aluno.senai.br</span>
                                    </a>
                                </li>
                                <li className={styles.contactItem}>
                                    <a href="https://www.linkedin.com/in/evelyn-gon%C3%A7alves-de-oliveira-067a4a275/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                        <AiFillLinkedin className={styles.icon} />
                                        <span>LinkedIn</span>
                                    </a>
                                </li>
                                <li className={styles.contactItem}>
                                    <a href="https://github.com/EvelynOliveira1200" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                        <AiFillGithub className={styles.icon} />
                                        <span>GitHub</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.buttonContainer}>
                            <Link href="/home">
                                <button className={styles.backButton}>Voltar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
