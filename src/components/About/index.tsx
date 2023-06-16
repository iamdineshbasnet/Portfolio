import React from 'react';
import styles from '../../styles/About.module.scss';
import PageHeader from '../PageHeader';
const About = () => {
	return (
		<main className={styles.about} id="About">
			<section className={styles.section}>
				<PageHeader title="About Me" subtitle="who am i" />
			</section>
		</main>
	);
};

export default About;
