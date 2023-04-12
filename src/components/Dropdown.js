import styles from "@/styles/Dropdown.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const Dropdown = ({ toggle, setToggle }) => {

  const data=["Profile","Dashboard","Logout","Home"];
  const links=["/profile","/amit","/","/amogh"];

  const dropdowns=[];

  for(var i=0;i<data.length;++i){
    dropdowns.push(
      <Link className={styles.link} href={links[i]}> 
    <motion.div
      className={styles.dropdownItem}
      whileHover={{ backgroundColor: "#ef5777", scale: 1.1 }}
    >
      {data[i]}
    </motion.div>
    </Link>
    )
  }

  const handleCloseToggle = () => {
    setToggle(false);
    console.log(toggle);
  };

  return (
    <motion.div className={styles.dropdown}>
      {dropdowns}
    </motion.div>
  );
};

export default Dropdown;
