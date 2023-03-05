import Head from "next/head";
import Post from "@/components/Post";
import SuggestionBox from "@/components/SuggestionBox";
import Navbar from "@/components/Navbar";
// import styles from "@/styles/globals.css"
export default function Post1() {
  return (
    <>
      <Head>
        <title>Social Media/Amogh</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <SuggestionBox id={"i"} />
        <Post username={"Amogh"} hasImage={true} postId={"i"} />
        <button className="trendingBtn"> Trending ../</button>
        <Post username={"Amit"} hasImage={true} postId={"i"} />
        <Post username={"Aman"} hasImage={true} postId={"i"} />
        <Post username={"Nishant"} hasImage={true} postId={"i"} />
      </main>
    </>
  );
}
