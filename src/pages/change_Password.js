import styles from "@/styles/Dashboard.module.css";
import Link from "next/link";
export default function Change_Password() {
  return (
    <>
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
