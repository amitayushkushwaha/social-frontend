import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Dashboard.module.css";
import { accounts } from "@/pages/change_Info";
// Icons
import PersonIcon from "@mui/icons-material/Person";
import ShieldIcon from "@mui/icons-material/Shield";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";

const IconsData = [
  {
    id: 1,
    title: "Account",
    icon: <PersonIcon />,
    link: "/account",
  },
  {
    id: 2,
    title: "Security",
    icon: <ShieldIcon />,
    link: "/security",
  },
  {
    id: 3,
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
  {
    id: 4,
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/",
  },
];

import avatar from "./../../assets/images/avatar.jpg";
// import { IconsData } from "@/data/Icons";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Social Media/Amit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div className={styles.headerIcon}>
              <img src={avatar.src} fill style={{ objectFit: "cover" }} alt="avatar"/>
            </div>
            <div className={styles.headerContent}>
              <h4>{accounts.userName}</h4>
              <p className={styles.dashboardemail}>{accounts.email}</p>
            </div>
          </div>

          <div className={styles.dashboardOptions}>
            {IconsData.map((item) => {
              return (
                <span key={item.id} className={styles.dashboardItem}>
                  <i className={styles.icon}>{item.icon}</i>
                  <Link href={item.link} legacyBehavior>
                    <a className={styles.anchor}>
                      <p> {item.title} </p>
                    </a>
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
