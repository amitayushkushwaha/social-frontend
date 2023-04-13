import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";
import Head from "next/head";
import BackButton from "@/components/BackButton";
import CreateButton from "@/components/createButton";

export default function trending() {
  return (
    <>
      <Head>
        <title>Social Media/Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <CreateButton />
        <Navbar />
        <BackButton title="Trending"/>

        {/* <Topbar /> */}
        <Trending />
      </main>
    </>
  );
}
