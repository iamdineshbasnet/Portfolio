import React from "react";
import styles from "@/styles/Expertise.module.scss";
import PageHeader from "@/components/PageHeader";
import { BsLaptop } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const cardContentList = [
    {
        id: 1,
        title: "UI/UX Design",
        tools: "Figma",
        icon: <BsLaptop className={styles.icon} />,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quiandae exercitationem voluptatibus corporis.",
    },
    {
        id: 2,
        title: "Frontend Dev",
        tools: "React & Nextjs",
        icon: <FaReact className={styles.icon} />,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quiandae exercitationem voluptatibus corporis.",
    },
];
const index = () => {
    return (
        <main className={styles.expertise} id="Expertise">

            <section className={styles.section}>
            <PageHeader
                title={"My Expertise"}
                subtitle={"areas of excellence"}
            />

            <section className={styles.content}>
                {cardContentList?.map((content, index)=>(
                <div className={styles.card} key={index}>
                    <section className={styles.cardHeader}>
                        <div>
                            {content?.icon}
                        </div>
                        <div className={styles.cardTitle}>
                            <p className={styles.titleHighlights}>
                                {content?.title}
                            </p>
                            <p>{content?.tools}</p>
                        </div>
                    </section>
                    <section className={styles.cardContent}>
                        <div className={styles.tag}>{`<h3>`}</div>
                        <div className={styles.cardDescription}>
                            <p>
                               {content?.description}
                            </p>
                        </div>
                        <div className={styles.tag}>{`</h3>`}</div>
                    </section>
                </div>

                ))}
            </section>

            </section>
        </main>
    );
};

export default index;
