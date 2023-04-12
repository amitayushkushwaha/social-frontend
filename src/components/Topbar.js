import "./../styles/Navbar.module.css";

import { useState } from "react";
// import Sidebar from "./Sidebar";
import styles from "@/styles/Topbar.module.css";

const Topbar = () => {
  const [leftBar, setLeftBar] = useState(false);
  const handleSideBar = () => {
    setLeftBar(true);
    console.log(leftBar);
  };
  return (
    <div className={styles.topbarBox} id="topbarBoxId">
      <div className="studyBox">
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
    </div>
  );
};

export default Topbar;
