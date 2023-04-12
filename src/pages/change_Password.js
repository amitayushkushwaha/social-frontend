import Navbar from "@/components/Navbar";
import styles from "@/styles/Dashboard.module.css";
import Link from "next/link";
import BackButton from "@/components/BackButton";
export default function Change_Password() {
  return (
    <>
    <Navbar/>
    <div style={{paddingTop:"3%",paddingLeft:"3%",backgroundColor:"var(--post-background-color)"}} >
        <BackButton/>
        </div>
     <form className={styles.change_password}>
      <input type="password" placeholder="Current_password"  autocomplete="off" />
      <input type="password" placeholder="New_Password"  autocomplete="off" />
      <input type="password" placeholder="Confirm_Password"  autocomplete="off" />
    </form>
    <Link href="/amit" legacyBehavior>
        <a className={styles.anchor}>
        <h4 className={styles.change_password_h4}>Save</h4>
        </a>
      </Link>
    
    </>

  );
}
