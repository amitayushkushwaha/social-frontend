import styles from "@/styles/Dropdown.module.css";
import Link from "next/link";
const Dropdown = ({ toggle, setToggle }) => {
  const data = ["Profile", "Dashboard", "Logout", "Home"];
  const links = ["/profile", "/amit", "/", "/amogh"];

  const dropdowns = [];

  for (var i = 0; i < data.length; ++i) {
    dropdowns.push(
      <Link className={styles.link} href={links[i]}>
        <div
          className={styles.dropdownItem}
          whileHover={{ backgroundColor: "#ef5777", scale: 1.1 }}
        >
          {data[i]}
        </div>
      </Link>
    );
  }

  const handleCloseToggle = () => {
    setToggle(false);
    console.log(toggle);
  };

  return <div className={styles.dropdown}>{dropdowns}</div>;
};

export default Dropdown;
