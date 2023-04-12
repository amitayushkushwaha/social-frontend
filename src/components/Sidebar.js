import styles from "@/styles/Sidebar.module.css";
import { motion } from "framer-motion";

const Sidebar = ({ left, setLeft }) => {
  const handleCloseSidebar = () => {
    setLeft(false);
    console.log(left);
  };

  const sideBarVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const childrenVariants = {
    hidden: {
      x: "-70vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const closeVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  const sideBarData = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Account",
    },
    {
      id: 3,
      title: "Downloads",
    },
    {
      id: 4,
      title: "Logout",
    },
    {
      id: 5,
      title: "About Us",
    },
  ];

  return (
    <motion.div
      className={styles.sideBar}
      variants={sideBarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.sidebarBox}>
        {sideBarData.map((item) => {
          return (
            <motion.div
              key={item.id}
              className={`${styles.item} ${styles.item1}`}
              variants={childrenVariants}
              initial="hidden"
              animate="visible"
            >
              {item.title}
            </motion.div>
          );
        })}
        <motion.button
          className={`${styles.item} ${styles.closeBtn}`}
          onClick={handleCloseSidebar}
          variants={closeVariants}
          initial="hidden"
          animate="visible"
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
