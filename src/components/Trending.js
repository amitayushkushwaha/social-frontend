import styles from "@/styles/Trending.module.css";
import { motion } from "framer-motion";
import trendingImage from "assets/images/profileimage2.jpg";
import Image from "next/image";
import Link from "next/link";
import Post from "./Post";
let topic = "";
const Trending = () => {
  const buttonHover = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff5252",
    },
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  const posts = [];

  for (var i = 0; i < 15; ++i) {
    posts.push(
      <div key={i}>
        <Post
          username={"Amogh"}
          hasImage={true}
          postId={"i"}
          hasLiked={false}
          ishisFriend={true}
        />
      </div>
    );
  }

  const handleClick = (e) => {
    const content = e.target;
    let h2 = content.querySelector("h2");

    if (h2 != null) {
      topic = h2.textContent;
    } else {
      const div = content.parentNode;
      h2 = div.querySelector("h2");
      if (h2 != null) {
        topic = h2.textContent;
      }
    }
  };

  const leftVariants = {
    hidden: { 
      x: "0"
  },
    visible: {
      x: 0,
      transition: {
        duration:1,
        delay: 1,
      },
    },
  };
  const rightVariants = {
    hidden: {
      x: "0"
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <div className={styles.trending}>
      <div className={styles.topic}>#topics</div>
      <div className={styles.content}>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <motion.div
              className={styles.contentBox}
              variants={leftVariants}
              initial="hidden"
              animate="visible"
              onClick={handleClick}
            >
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Dance</h2>
            </motion.div>
          </a>
        </Link>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <motion.div
              className={styles.contentBox}
              variants={rightVariants}
              initial="hidden"
              animate="visible"
              onClick={handleClick}
            >
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Music</h2>
            </motion.div>
          </a>
        </Link>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <motion.div
              className={styles.contentBox}
              variants={leftVariants}
              initial="hidden"
              animate="visible"
              onClick={handleClick}
            >
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Sports</h2>
            </motion.div>
          </a>
        </Link>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <motion.div
              className={styles.contentBox}
              variants={rightVariants}
              initial="hidden"
              animate="visible"
              onClick={handleClick}
            >
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Topic</h2>
            </motion.div>
          </a>
        </Link>
      </div>
      <hr />
      <div className={styles.posts}>
        <div className={styles.topic}>#posts</div>
        <div className={styles.posts_container}>{posts}</div>
      </div>
    </div>
  );

  // const leftVariants = {
  //   hidden: { x: "-100vw",
  //   //  visibility: "hidden"
  //    },
  //   visible: {
  //     x: 0,
  //     // visibility: "visible",
  //     transition: {
  //       duration: 2,
  //     },
  //   },
  // };

  // const rightVariants = {
  //   hidden: { x: "100vw",
  //   //  visibility: "hidden" 
  //   },
  //   visible: {
  //     x: 0,
  //     // visibility: "visible",
  //     transition: {
  //       duration: 2,
  //     },
  //   },
  // };

  // return (
  //   <div className={styles.trending}>
  //     <div className={styles.topic}>#topics</div>
  //     <div className={styles.content}>
  //       <Link href="/trendingPost" legacyBehavior>
  //         <a>
  //           <motion.div
  //             className={styles.contentBox}
  //             variants={leftVariants}
  //             initial="hidden"
  //             onClick={handleClick}
  //           >
  //             <Image src={trendingImage} alt={"Image"} />
  //             <h2 className={styles.topic_name}>Dance</h2>
  //           </motion.div>
  //         </a>
  //       </Link>
  //       <Link href="/trendingPost" legacyBehavior>
  //         <a>
  //           <motion.div
  //             className={styles.contentBox}
  //             variants={rightVariants}
  //             initial="hidden"
  //             onClick={handleClick}
  //           >
  //             <Image src={trendingImage} alt={"Image"} />
  //             <h2 className={styles.topic_name}>Music</h2>
  //           </motion.div>
  //         </a>
  //       </Link>
  //       <Link href="/trendingPost" legacyBehavior>
  //         <a>
  //           <motion.div
  //             className={styles.contentBox}
  //             variants={leftVariants}
  //             initial="hidden"
  //             onClick={handleClick}
  //           >
  //             <Image src={trendingImage} alt={"Image"} />
  //             <h2 className={styles.topic_name}>Sports</h2>
  //           </motion.div>
  //         </a>
  //       </Link>
  //       <Link href="/trendingPost" legacyBehavior>
  //         <a>
  //           <motion.div
  //             className={styles.contentBox}
  //             variants={rightVariants}
  //             initial="hidden"
  //             onClick={handleClick}
  //           >
  //             <Image src={trendingImage} alt={"Image"} />
  //             <h2 className={styles.topic_name}>Topic</h2>
  //           </motion.div>
  //         </a>
  //       </Link>
  //     </div>
  //     <hr />
  //     <div className={styles.posts}>
  //       <div className={styles.topic}>#posts</div>
  //       <div className={styles.posts_container}>{posts}</div>
  //     </div>
  //   </div>
  // );
};

export default Trending;
export { topic };
