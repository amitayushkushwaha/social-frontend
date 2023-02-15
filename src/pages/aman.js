import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Social Media/Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Trending />
        <Navbar/>
      </main>
    </>
  );
}
