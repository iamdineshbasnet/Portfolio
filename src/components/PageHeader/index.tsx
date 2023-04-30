import React from "react";
import styles from "@/styles/PageHeader.module.scss";

interface props{
    title: string;
    subtitle: string
}
const index = ({title, subtitle}: props) => {
    return (
        <section className={styles.header}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.subTitle}>
                {subtitle}
            </div>
        </section>
    );
};

export default index;
