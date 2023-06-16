import styles from '@/styles/Contact.module.scss';
import React, { useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import { validateEmail, validateName } from '../validation';
import {
	MdOutlinePersonOutline,
	MdOutlineMap,
	MdOutlineMailOutline,
	MdLocalPhone,
	MdLocationOn,
	MdOutlineAlternateEmail,
} from 'react-icons/md';

const personalInfo = {
	id: 1,
	name: 'Dinesh Basnet',
	address: 'Kathmandu',
	country: 'Nepal',
	email: 'iamdineshbasnet@gmail.com',
	phone: '+977 9825737707',
};
const Contact = () => {
	// state to hold person data
	const [personInfo, setPersonInfo] = React.useState({
		fullName: '',
		email: '',
		subject: '',
		message: '',
	});

	// destructure the key value of personInfo
	const { fullName, email, subject, message } = personInfo;

	// state to hanlde errors
	const [emailError, setEmailError] = React.useState<boolean>(false);
	const [fullNameError, setFullNameError] = React.useState<boolean>(false);
	const [subjectError, setSubjectError] = React.useState<boolean>(false);
	const [messageError, setMessageError] = React.useState<boolean>(false);

	// function to handle full name
	const handleFullName = ({ target: { value } }: any) => {
		if (value !== '') {
			if (validateName(value)) {
				const splitWord = value.split(' ');
				if (
					splitWord.length === 2 &&
					validateName(splitWord[0]) &&
					validateName(splitWord[1])
				) {
					setFullNameError(false);
					setPersonInfo({ ...personInfo, fullName: value });
				} else {
					setFullNameError(true);
				}
			} else {
				setFullNameError(true);
			}
		} else {
			setFullNameError(true);
		}
	};

	// function to handle email
	const handleEmail = ({ target: { value } }: any) => {
		if (!validateEmail(value)) {
			setEmailError(true);
		} else {
			setEmailError(false);
			setPersonInfo({ ...personInfo, email: value });
		}
	};

	// function to handle subject
	const handleSubject = ({ target: { value } }: any) => {
		if (value === '') {
			setSubjectError(true);
		} else {
			setSubjectError(false);
			setPersonInfo({ ...personInfo, subject: value });
		}
	};

	// function to handle message
	const handleMessage = ({ target: { value } }: any) => {
		if (value === '') {
			setMessageError(true);
		} else {
			setMessageError(false);
			setPersonInfo({ ...personInfo, message: value });
		}
	};

	// submitting the form
	const handleSubmit = (event: any) => {
		event.preventDefault();
		if (fullName && email && subject && message) {
			alert('submitted');
		} else {
			alert('not submitted');
		}
	};
	return (
		<main className={styles.contact} id="Contact">
			<section className={styles.section}>
				<PageHeader title="Contact Me" subtitle="Get in touch" />

				<div className={styles.contactSection}>
					<section className={styles.left}>
						<div className={styles.heading}>
							<p>Message Me</p>
						</div>

						<form
							action="#"
							className={styles.form}
							onSubmit={handleSubmit}>
							<section className={styles.formGroup}>
								<div className={styles.inputField}>
									<input
										type="text"
										id="name"
										className={`${styles.name} ${
											fullNameError ? styles.error : ''
										}`}
										required
										autoComplete="off"
										onKeyUp={handleFullName}
									/>
									<label htmlFor="">Full Name</label>
								</div>
								<div className={styles.inputField}>
									<input
										type="text"
										id="email"
										required
										autoComplete="off"
										onKeyUp={handleEmail}
										className={`${
											emailError ? styles.error : ''
										}`}
									/>
									<label htmlFor="">Email</label>
								</div>
							</section>
							<section className={styles.formGroup}>
								<div className={styles.inputField}>
									<input
										type="text"
										id="subject"
										required
										autoComplete="off"
										onKeyUp={handleSubject}
										className={`${
											subjectError ? styles.error : ''
										}`}
									/>
									<label htmlFor="">Subject</label>
								</div>
							</section>

							<section className={styles.formGroup}>
								<div className={styles.inputField}>
									<textarea
										id="message"
										required
										autoComplete="off"
                                        rows={10}
										onKeyUp={handleMessage}
										className={`${
											messageError ? styles.error : ''
										}`}
									/>
									<label htmlFor="">Message</label>
								</div>
							</section>

							<div className={styles.buttonBox}>
								<button type="submit">Send Message</button>
							</div>
						</form>
					</section>

					<section className={styles.right}>
						<section className={styles.heading}>
							<p className={styles.title}>Contact Info</p>
							<p className={styles.subTitle}>
								Feel free to contact me
							</p>
						</section>

						<section className={styles.info}>
							<div className={styles.infoItem}>
								<div className={styles.iconBox}>
									<MdOutlinePersonOutline
										className={styles.icon}
									/>
								</div>

								<div className={styles.details}>
									<p className={styles.head}>Name</p>
									<p className={styles.description}>
										{personalInfo?.name}
									</p>
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.iconBox}>
									<MdOutlineMap className={styles.icon} />
								</div>

								<div className={styles.details}>
									<p className={styles.head}>Location</p>
									<p className={styles.description}>
										{personalInfo?.address},{' '}
										{personalInfo?.country}
									</p>
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.iconBox}>
									<MdLocalPhone className={styles.icon} />
								</div>

								<div className={styles.details}>
									<p className={styles.head}>Phone</p>
									<a
										href="tel: +9779825737707"
										className={styles.description}>
										{personalInfo?.phone}
									</a>
								</div>
							</div>
							<div className={styles.infoItem}>
								<div className={styles.iconBox}>
									<MdOutlineMailOutline
										className={styles.icon}
									/>
								</div>

								<div className={styles.details}>
									<p className={styles.head}>Email</p>
									<a
										href="mailto: iamdineshbasnet@gmail.com"
										className={styles.description}>
										{personalInfo?.email}
									</a>
								</div>
							</div>
						</section>
					</section>
				</div>
			</section>
		</main>
	);
};

export default Contact;
