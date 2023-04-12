import Head from "next/head";
import Post from "@/components/Post";
import { topic } from "@/components/Trending";
import styles from "@/styles/allTrendingPosts.module.css";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import CreateButton from "@/components/createButton";
export default function trendingPost() {
  const posts = [];

  for (var i = 0; i < 10; ++i) {
    posts.push(
      <div key={i}>
        <Post
          hasImage={true}
          postId={i}
          username={"Amogh"}
          hasLiked={false}
          ishisFriend={true}
        />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Social Media/Amogh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <CreateButton/>
        <Navbar />
        <div className={styles.heading}>
          <div className={styles.button}>
            <BackButton />
          </div>

          <div className={styles.topic_name}>{topic || "Topic" }</div>
        </div>
        <div className={styles.postsContainer}>{posts}</div>
      </main>
    </>
  );
}
