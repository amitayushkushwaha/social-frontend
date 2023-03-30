import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";
import Link from "next/link";
var accounts = {
  userName: "@amit_maurya",
  email: "amitmaurya@gmail.com",
  tel: "+12 357",
};

function Change_Info() {
  const [contact, setContact] = useState(accounts);

  function ClickHandler() {
    accounts = contact;
    console.log(accounts);
  }
  function Update_Contact(event) {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  }

  return (
    <div>
      <form className={styles.change_info} onChange={Update_Contact}>
        <input
          type="text"
          placeholder="User_Name"
          name="userName"
          value={contact.userName}
          autocomplete="off"
        />
        <input
          type="email"
          placeholder="Email_Id"
          name="email"
          value={contact.email}
          autocomplete="off"
        />
        <input
          type="tel"
          placeholder="Telephone"
          name="tel"
          value={contact.tel}
          autocomplete="off"
        />
      </form>
      <Link href="/account" legacyBehavior>
        <a className={styles.anchor}>
          <h4 onClick={ClickHandler} className={styles.change_Info_h4}>
            Save
          </h4>
        </a>
      </Link>
    </div>
  );
}
export default Change_Info;
export { accounts };
