import styles from "@/styles/Dashboard.module.css";
import avatar from "@/../assets/images/avatar.jpg";
import Image from "next/image";
import Link from "next/link";
import ReactDOM from "react-dom";
import { accounts } from "./change_Info";

function Account() {
  // console.log(avatar)

  return (
    <div className={styles.account}>
      <figure>
        <img
          src={avatar.src}
          alt={accounts.userName}
          className={styles.imga}
          fill
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
  );
}

export default Account;
