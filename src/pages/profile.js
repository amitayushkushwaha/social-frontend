import styles from "@/styles/Dashboard.module.css";
import FlareIcon from "@mui/icons-material/Flare";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import avatar from "@/../assets/images/avatar.jpg";
import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BackButton from "@/components/BackButton";
import { useState } from "react";
var profile_follower = [
  {
    name: "Following",
    quantity: "79",
  },
  {
    name: "Follower",
    quantity: "216m",
  },
  {
    name: "Posts",
    quantity: "1.7k",
  },
];
export default function Profile() {
  const [a,setA]=useState(false);
  function click(){
    setA(prev =>
      !prev);
  }

  return (
    <div className={styles.profile}>
      <BackButton title="Accout"/>
      <div className={styles.profile_upper}>
        <div className={styles.profile_header}>
          <i>
            <Link href="/amit" legacyBehavior>
              <a className={styles.profileanchor}>
                <ArrowBackIcon />
              </a>
            </Link>
          </i>
          <h2>Amit Maurya</h2>
          <i>
            <FlareIcon />
          </i>
        </div>
        <div className={styles.profile_image}>
          <figure>
            <img
              src={avatar.src}
              alt="profile"
              style={{ objectFit: "cover" }}
            />
            <figcaption>
              <h3>@Amit_Maurya</h3>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className={styles.profile_lower}>
        <div className={styles.profile_follower}>
          {profile_follower.map((x) => (
            <div key={x.name}>
              <h3>{x.quantity}</h3>
              <p>{x.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.profile_footer}>
          <p>Follow</p>
          <i>
            {" "}
            <MailOutlineIcon />
          </i>
        </div>
      </div>
    </div>
  );
}
