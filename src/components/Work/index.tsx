import React from 'react';
import styles from '@/styles/Work.module.scss';
import PageHeader from '@/components/PageHeader';
import {
	MdTag,
	MdOutlineRemoveRedEye,
	MdOutlineWorkOutline,
} from 'react-icons/md';
import { RiGithubLine } from 'react-icons/ri';
import Link from 'next/link';
import Image1 from '@/assets/image1.png';
import Image from 'next/image';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const workList = [
	{
		id: 1,
		name: 'Movie App',
		imageSrc: Image1,
		tags: ['React', 'Redux'],
		demo_link: 'https://themoviedb-jgl1qx4ph-iamdineshbasnet.vercel.app/',
		source_code: 'https://github.com/iamdineshbasnet/Movie-App',
	},
	{
		id: 2,
		name: 'Dashboard',
		imageSrc: Image1,
		tags: ['Next', 'Firebase'],
	},
	// {
	// 	id: 3,
	// 	name: 'PokeDex',
	// 	imageSrc: Image1,
	// 	tags: ['Javascript', 'Redux'],
	// },
	// {
	// 	id: 4,
	// 	name: 'Github Issue Page',
	// 	imageSrc: Image1,
	// 	tags: ['React', 'Redux'],
	// },
	// {
	// 	id: 5,
	// 	name: 'Instagram Clone',
	// 	imageSrc: Image1,
	// 	tags: ['Next', 'Firebase'],
	// },
	// {
	// 	id: 6,
	// 	name: 'PokeDex',
	// 	imageSrc: Image1,
	// 	tags: ['Javascript', 'Redux'],
	// },
];
const Work = () => {
	return (
		<main className={styles.work} id="Work">
			<section className={styles.section}>
				<PageHeader title="My Work" subtitle="things I've built" />

				<section className={styles.workSection}>
					<div className={styles.cardContainer}>
						<VerticalTimeline layout="1-column-left">
							{workList?.slice(0, 6)?.map((work, index) => (
								<VerticalTimelineElement
									key={index}
									iconStyle={{
										background: '#233554',
										color: '#64ffda63',
									}}
									icon={
										<MdOutlineWorkOutline
											className={'icon'}
										/>
									}>
									<section className={'card'}>
										<div className={'cardTitle'}>
											<h6>{work?.name}</h6>
										</div>

										<div className={'cardImage'}>
											<Image
												src={work?.imageSrc}
												alt=""
												width={1000}
												height={1000}
											/>
										</div>

										<div className={'cardTagBox'}>
											{work?.tags?.map((tag, i) => (
												<div
													className={'tagItem'}
													key={i}>
													<MdTag className={'icon'} />
													<p className={'tagName'}>
														{tag}
													</p>
												</div>
											))}
										</div>

										<div className={'cardAction'}>
											<Link
												href={`${work?.source_code}`}
												target="_blank"
												className={'cardActionItem'}>
												<p>Github</p>
												<RiGithubLine
													className={'icon'}
												/>
											</Link>
											<Link
												href={`${work?.demo_link}`}
												target="_blank"
												className={'cardActionItem'}>
												<p>Demo</p>
												<MdOutlineRemoveRedEye
													className={'icon'}
												/>
											</Link>
										</div>
									</section>
								</VerticalTimelineElement>
							))}
						</VerticalTimeline>
					</div>
				</section>
			</section>
		</main>
	);
};

export default Work;
