import React, { useState } from "react";
import styles from "@/styles/Header.module.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import {GoHome} from 'react-icons/go'
import {
    MdOutlineFileCopy,
    MdOutlineImportContacts,
    MdOutlinePermContactCalendar,
} from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import Link from "next/link";

const navList = [
    { id: 1, name: "Home", icon: <GoHome className={styles.icon} /> },
    { id: 2, name: "About", icon: <BsPerson className={styles.icon} /> },
    {
        id: 3,
        name: "Expertise",
        icon: <MdOutlineImportContacts className={styles.icon} />,
    },
    {
        id: 4,
        name: "Work",
        icon: <BiBriefcase className={styles.MdOutlineImportContacts} />,
    },
    {
        id: 5,
        name: "Contact",
        icon: <MdOutlinePermContactCalendar className={styles.icon} />,
    },
];

const index = () => {
    // state to track side bar
    const [activeSideBar, setActiveSideBar] = useState<boolean>(false);

    // function to show side bar
    const showSideBar = () => {
        setActiveSideBar(true);
    };

    // function to hide side bar
    const hideSideBar = () => {
        setActiveSideBar(false);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {/* Logo Section */}
                <div className={styles.logo}>
                    <svg
                        className={styles.svg}
                        width="40"
                        height="40"
                        viewBox="0 0 59 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className={styles.path1}
                            d="M5.95225 15.9047L29.5 2.3094L53.0477 15.9047V43.0953L29.5 56.6906L5.95225 43.0953V15.9047Z"
                            stroke="#64FFDA"
                            strokeOpacity="0.88"
                            strokeWidth="4"
                        />
                        <path
                            className={styles.path2}
                            d="M37.6285 29.296C37.6285 30.8025 37.4296 32.0932 37.0319 33.1681C36.6425 34.2345 36.0797 35.1062 35.3434 35.7833C34.6071 36.4604 33.7099 36.9598 32.652 37.2814C31.6025 37.5945 30.3499 37.7511 28.8942 37.7511H24.9713C24.692 37.7511 24.455 37.6707 24.2604 37.5099C24.0742 37.3406 23.9811 37.0698 23.9811 36.6974V22.3771C23.9811 22.0047 24.0742 21.7381 24.2604 21.5773C24.455 21.408 24.692 21.3234 24.9713 21.3234H29.1862C30.6503 21.3234 31.8903 21.4969 32.9059 21.8439C33.93 22.1824 34.789 22.6902 35.483 23.3673C36.1855 24.0359 36.7187 24.8654 37.0826 25.8556C37.4466 26.8458 37.6285 27.9926 37.6285 29.296ZM34.1754 29.4103C34.1754 28.6316 34.0823 27.908 33.8961 27.2394C33.7184 26.5708 33.4264 25.991 33.0201 25.5001C32.6224 25.0092 32.1061 24.6284 31.4713 24.3575C30.845 24.0782 30.0198 23.9386 28.9957 23.9386H27.3073V35.1105H29.0465C29.9606 35.1105 30.7308 34.992 31.3571 34.755C31.9834 34.518 32.5039 34.1626 32.9186 33.6886C33.3418 33.2062 33.6549 32.6095 33.858 31.8986C34.0696 31.1876 34.1754 30.3582 34.1754 29.4103Z"
                            fill="#64FFDA"
                            fillOpacity="0.88"
                        />
                    </svg>
                </div>

                {/* Navigation List Container */}
                <ul
                    className={`${styles.navMenu} ${
                        activeSideBar ? styles.show : ""
                    }`}>
                    {/* Close Icon */}
                    <div className={styles.closeIconBox}>
                        <RiCloseLine
                            className={styles.icon}
                            onClick={hideSideBar}
                        />
                    </div>

                    {/* Navigation List */}
                    {navList?.map((item, index) => (
                        <li className={styles.navItem} key={index}>
                            <span>0{item.id}.</span>
                            <Link href="#" className={styles.item}>
                                {item?.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Menu Icon */}
                <div
                    className={`${styles.menuBox} ${
                        activeSideBar ? styles.active : ""
                    }`}>
                    <RiMenu3Line
                        className={styles.menuIcon}
                        onClick={showSideBar}
                    />
                </div>

                {/* Mobile responsive */}
                <ul className={styles.mobileNavMenu}>
                    {navList?.map((item, index) => (
                        <li className={styles.mobileNavItem} key={index}>
                            <Link href="#" className={styles.mobileLink}>{item?.icon}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default index;
