import "./../styles/Navbar.module.css";

import { motion , AnimatePresence } from "framer-motion";
import { useState } from "react";
import Sidebar from "./Sidebar";
import styles from "@/styles/Topbar.module.css";


const Topbar = () => {
  const [leftBar,setLeftBar] = useState(false)
  const handleSideBar = ()=>{
    setLeftBar(true)
    console.log(leftBar)
  }
  return (
    
    <motion.div
    
      className={styles.topbarBox}
      id="topbarBoxId"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      
      
      
      
      <div className="studyBox">
        <motion.div
          className="box1"
          initial={{ x: "-50vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="box2"
          initial={{ x: "50vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Topbar;
