import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LegendToggleOutlinedIcon from "@mui/icons-material/LegendToggleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "@/styles/Navbar.module.css";
import linkstyle from "@/styles/Dropdown.module.css";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { CircleNotifications } from "@mui/icons-material";
import { TrendingUp } from "@mui/icons-material";

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

  return (
    <div className={styles.navbar}>
      {/* Left Navbar */}
      <div className={styles.leftNavbar}>
        <span className={styles.leftNavbarTitle}>Soocial</span>
      </div>

      {/* Sidebar */}
      {left && (
        <div className={styles.sidebarContainer}>
          <Sidebar left={left} setLeft={setLeft} />
        </div>
      )}

      {/* Right Navbar */}
      <div className={styles.rightNavbar}>
        {/* <div className={styles.media}>
          <Link href="/amit" className={linkstyle.link}>
            <div className={styles.itm}>DashBoard</div>
          </Link>
          <Link href="/profile" className={linkstyle.link}>
            <div className={styles.itm}>Profile</div>
          </Link>
          <Link href="/">
            <div className={styles.itm}>Logout</div>
          </Link>

          <div className={styles.itm}>ITEM3</div>
          <div className={styles.itm}>ITEM4</div>
          <div className={styles.itm}>ITEM5</div>
          <div className={styles.itm}>ITEM6</div>
        </div> */}

        <div className={styles.icons}>
          <Link href="/aman">
            <TrendingUp />
          </Link>
          <Link href="/notifications">
            <CircleNotifications />
          </Link>
          {/* <div className={styles.sunny} onClick={handleSunnyClick}>
            <WbSunnyOutlinedIcon />
          </div> */}
          <div className={styles.toggle} onClick={handleToggleClick}>
            <LegendToggleOutlinedIcon />
          </div>
        </div>

        {/* Dropdown Menu  */}
        {toggle && (
          <div className={styles.dropdownComp}>
            <Dropdown toggle={toggle} setToggle={setToggle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
