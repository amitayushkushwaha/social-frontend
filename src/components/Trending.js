import styles from "@/styles/Trending.module.css";
import trendingImage from "assets/images/profileimage2.jpg";
import Image from "next/image";
import Link from "next/link";
import Post from "./Post";
let topic = "";
const Trending = () => {
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

  return (
    <div className={styles.trending}>
      <div className={styles.topic}>#topics</div>
      <div className={styles.content}>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <div className={styles.contentBox}>
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Dance</h2>
            </div>
          </a>
        </Link>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <div className={styles.contentBox}>
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Music</h2>
            </div>
          </a>
        </Link>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <div className={styles.contentBox}>
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Sports</h2>
            </div>
          </a>
        </Link>
        <Link href="/trendingPost" legacyBehavior>
          <a>
            <div className={styles.contentBox} onClick={handleClick}>
              <Image src={trendingImage} alt={"Image"} />
              <h2 className={styles.topic_name}>Topic</h2>
            </div>
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
};

export default Trending;
export { topic };
