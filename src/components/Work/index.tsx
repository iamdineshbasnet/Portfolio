import React from "react";
import styles from "@/styles/Work.module.scss";
import PageHeader from "@/components/PageHeader";
import { MdTag, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";

const workList = [
    {
        id: 1,
        name: "Github Issue Page",
        imageSrc:
            "https://doc-geonode.readthedocs.io/en/latest/_images/listing-screen.png",
        tags: ["React", "Redux"],
    },
    {
        id: 2,
        name: "Instagram Clone",
        imageSrc:
            "https://repository-images.githubusercontent.com/305868728/85d9d100-132e-11eb-8ba6-7165e97de719",
        tags: ["Next", "Firebase"],
    },
    {
        id: 3,
        name: "PokeDex",
        imageSrc:
            "https://dz2cdn1.dzone.com/storage/temp/13937171-pokemon1.png",
        tags: ["Javascript", "Redux"],
    },
    {
        id: 4,
        name: "Github Issue Page",
        imageSrc:
            "https://doc-geonode.readthedocs.io/en/latest/_images/listing-screen.png",
        tags: ["React", "Redux"],
    },
    {
        id: 5,
        name: "Instagram Clone",
        imageSrc:
            "https://repository-images.githubusercontent.com/305868728/85d9d100-132e-11eb-8ba6-7165e97de719",
        tags: ["Next", "Firebase"],
    },
    {
        id: 6,
        name: "PokeDex",
        imageSrc:
            "https://dz2cdn1.dzone.com/storage/temp/13937171-pokemon1.png",
        tags: ["Javascript", "Redux"],
    },
];
const index = () => {
    return (
        <main className={styles.work}>
            <PageHeader title="My Work" subtitle="things I've built" />

            <section className={styles.workSection}>
                {/* <div className={styles.heading}>
                    <p>featured project</p>
                </div> */}

                <div className={styles.cardContainer}>
                    {workList?.map((work, index) => (
                        <section className={styles.card} key={index}>
                            <div className={styles.cardTitle}>
                                <h6>{work?.name}</h6>
                            </div>

                            <div className={styles.cardImage}>
                                <img src={work?.imageSrc} alt="" />
                            </div>

                            <div className={styles.cardTagBox}>
                                {work?.tags?.map((tag, i) => (
                                    <div className={styles.tagItem} key={i}>
                                        <MdTag className={styles.icon} />
                                        <p className={styles.tagName}>{tag}</p>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.cardAction}>
                                <div className={styles.cardActionItem}>
                                    <p>Github</p>
                                    <RiGithubLine className={styles.icon} />
                                </div>
                                <div className={styles.cardActionItem}>
                                    <p>Demo</p>
                                    <MdOutlineRemoveRedEye
                                        className={styles.icon}
                                    />
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default index;
