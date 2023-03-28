import Head from "next/head";
import Post from "@/components/Post";
import { topic } from "@/components/Trending";
import styles from "@/styles/allTrendingPosts.module.css"
export default function trendingPost() {
    const posts=[];

    for(var i=0;i<10;++i){
        posts.push(
            <div key={i} >
                <Post hasImage={true} postId={i} username={"Amogh"} hasLiked={false}
          ishisFriend={true} />
            </div>
        )
    }
  
  return (
    <>
      <Head>
        <title>Social Media/Amogh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
       <h2 className={styles.heading} >{topic}</h2>
       <div className={styles.postsContainer}>
       {posts}
       </div>
      </main>
    </>
  );
}
