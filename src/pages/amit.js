import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Dashboard.module.css";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import ShieldIcon from "@mui/icons-material/Shield";
import GroupIcon from "@mui/icons-material/Group";
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
    title: "Friends",
    icon: <GroupIcon />,
    link: "/friends",
  },
  {
    id: 4,
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
];

import avatar from "./../../assets/images/avatar.jpg";
// import { IconsData } from "@/data/Icons";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Social Media/Amit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <span className={styles.headerIcon}>
              <Image src={avatar} fill style={{ objectFit: "cover" }} />
            </span>
            <span className={styles.headerContent}>
              <h4>Amit Kushwaha</h4>
              <p className={styles.para}>amit.kushwaha@iitg.ac.in</p>
            </span>
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
    </>
  );
}
