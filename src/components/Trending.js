import styles from "@/styles/Trending.module.css";

const Trending = () => {
  return (
    <div className="trending">
      <div className={styles.buttonBox}>
        <button className={styles.trendingBtn}>Trending</button>
      </div>
      <hr />
      <div className="topics">#topics</div>
      <div className={styles.content}>
        <div className={styles.contentBox}></div>
        <div className={styles.contentBox}></div>
        <div className={styles.contentBox}></div>
        <div className={styles.contentBox}></div>
      </div>
      <hr />
      <div className="posts">#posts</div>
    </div>
  );
};

export default Trending;
