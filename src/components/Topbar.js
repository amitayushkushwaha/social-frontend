import "./../styles/Navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
    
      className="topbarBox"
      id="topbarBoxId"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatePresence>
      {leftBar && (<motion.div className={styles.preSidebar}
      initial = {{x:'-100vw'}}
      animate = {{x:0}}
      transition = {{duration : 1}}
      exit={{x:'-100vw',transition:{duration:1}}}
      ><Sidebar leftBar = {leftBar} setLeftBar = {setLeftBar}></Sidebar></motion.div>)}
      </AnimatePresence>
      <motion.div
        onClick={handleSideBar}
        initial={{ x: -100 }}
        animate={{ x: 5 }}
        transition={{ duration: 0.5 }}
      >
        <AccountCircleIcon fontSize="large" />
      </motion.div>
      <motion.div
        className="appName"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        AppName
      </motion.div>
      <motion.p
        className="para"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        Good Morning!!
      </motion.p>
      
      <div className="color1"></div>
      <div className="study">Study</div>
      <hr />
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
