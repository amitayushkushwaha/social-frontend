import styles from "@/styles/Trending.module.css";
import {motion} from 'framer-motion'

const Trending = () => {
  const leftVariants = {
    hidden:{x:'-100vw'},
    visible:{
      x:0,
      transition:{
        duration:1
      }
    }
  }
  const rightVariants = {
    hidden : {
      x:'100vw'
    },
    visible:{
      x:0,
      transition:{
        duration:1
      }
    }
  }
  const buttonHover = {
    hover:{
      scale:1.2,
      backgroundColor: '#ff5252'
    }
  }
  return (
    <div className="trending">
      <div className={styles.buttonBox}>
        <motion.button className={styles.trendingBtn}
        variants = {buttonHover}
        whileHover = "hover"
        >Trending</motion.button>
      </div>
      <hr />
      <div className="topics">#topics</div>
      <div className={styles.content}>
        <motion.div className={styles.contentBox}
        variants = {leftVariants}
        initial = "hidden"
        animate = "visible"
        ></motion.div>
        <motion.div className={styles.contentBox}
        variants = {rightVariants}
        initial = "hidden"
        animate = "visible"
        ></motion.div>
        <motion.div className={styles.contentBox}
        variants = {leftVariants}
        initial = "hidden"
        animate = "visible"
        ></motion.div>
        <motion.div className={styles.contentBox}
        variants = {rightVariants}
        initial = "hidden"
        animate = "visible"
        ></motion.div>
      </div>
      <hr />
      <div className="posts">#posts</div>
    </div>
  );
};

export default Trending;
