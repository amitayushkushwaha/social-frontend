import styles from "@/styles/Dashboard.module.css";
import avatar from "@/../assets/images/avatar.jpg";
import Image from "next/image";
import Link from "next/link";
import { accounts } from "./change_Info";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

function Account() {
  // console.log(avatar)

  return (
    <div>
      <Navbar />
      <div
        style={{
          paddingTop: "3%",
          paddingLeft: "3%",
          backgroundColor: "var(--post-background-color)",
        }}
      >
        <BackButton />
      </div>

      <div className={styles.account}>
        <figure>
          <Image
            src={avatar.src}
            alt={accounts.userName}
            className={styles.imga}
            style={{ objectFit: "cover" }}
          />
          <figcaption className={styles.caption}>Profile Picture</figcaption>
        </figure>

        <h3>{accounts.userName}</h3>
        <h4>{accounts.email}</h4>
        <h4>{accounts.tel}</h4>
        <Link href="/change_Info" legacyBehavior>
          <a className={styles.anchor}>
            <h4>Change Info</h4>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Account;
