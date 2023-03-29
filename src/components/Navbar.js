import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LegendToggleOutlinedIcon from "@mui/icons-material/LegendToggleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "@/styles/Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [sunny, setSunny] = useState(false);
  const [left, setLeft] = useState(false);

  const handleToggleClick = () => {
    setToggle((prev) => !prev);
    console.log(toggle);
  };

  const handleSunnyClick = () => {
    setSunny(true);
    console.log(sunny);
  };

  const handleleftClick = () => {
    setLeft(true);
  };

  const dropdownVariants = {
    hidden: {
      y: "0vh",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className={styles.navbar}>
      {/* Left Navbar */}
      <div className={styles.leftNavbar}>
        <span onClick={handleleftClick}>
          <AccountCircleIcon />
        </span>
        <span className={styles.leftNavbarTitle}>AppName</span>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {left && (
          <motion.div
            className={styles.sidebarContainer}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: "-100vw", transition: { duration: 1 } }}
          >
            <Sidebar left={left} setLeft={setLeft} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Navbar */}
      <div className={styles.rightNavbar}>
        <div className={styles.media}>
          <div className={styles.itm}>ITEM1</div>
          <div className={styles.itm}>ITEM2</div>
          <div className={styles.itm}>ITEM3</div>
          <div className={styles.itm}>ITEM4</div>
          <div className={styles.itm}>ITEM5</div>
          <div className={styles.itm}>ITEM6</div>
        </div>
        <div className={styles.icons}>
          <motion.div
            className={styles.sunny}
            onClick={handleSunnyClick}
            whileHover={{
              scale: 1.1,
              color: "#2c2c54",
              transition: { duration: 0.1 },
            }}
          >
            <WbSunnyOutlinedIcon />
          </motion.div>
          <motion.div
            className={styles.toggle}
            onClick={handleToggleClick}
            whileHover={{
              scale: 1.1,
              color: "#2c2c54",
              transition: { duration: 0.1 },
            }}
          >
            <LegendToggleOutlinedIcon />
          </motion.div>
        </div>

        {/* Dropdown Menu  */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              className={styles.dropdownComp}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
            >
              <Dropdown toggle={toggle} setToggle={setToggle} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
