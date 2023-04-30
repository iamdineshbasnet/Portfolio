import React from "react";
import styles from "@/styles/Hero.module.scss";
import { FiGithub, FiCodepen } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const index = () => {
    return (
        <main className={styles.hero}>
            <section className={styles.left}>
                <span className={styles.text}>Follow Me</span>
                <span className={styles.line}></span>
                <div className={styles.iconBox}>
                  <Link href="#" className={styles.link}><FiGithub className={styles.icon} /></Link>
                  <Link href="#" className={styles.link}><FiCodepen className={styles.icon} /></Link>
                  <Link href="#" className={styles.link}><FaLinkedinIn className={styles.icon} /></Link>
                                    
                </div>
            </section>

            <section className={styles.right}>
              <div className={styles.greet}>
                <h6>Hi, There!👋</h6>
              </div>

              <div className={styles.title}>
                <h1>I am <span>Dinesh Basnet</span></h1>
              </div>

              <div className={styles.subTitle}>
                  <h3>I build things for the web.</h3>
              </div>

              <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut eos delectus sint cupiditate nobis itaque beatae adipisci, doloremque repellendus.</p>
              </div>

              <div className={styles.button}>
                <button type="button">Download CV</button>
              </div>
            </section>
        </main>
    );
};

export default index;
