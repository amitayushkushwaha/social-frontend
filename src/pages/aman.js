import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Trending from "@/components/Trending";
import Head from "next/head";

export default function trending() {
  return (
    <>
      <Head>
        <title>Social Media/Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />

        {/* <Topbar /> */}
        <Trending />
      </main>
    </>
  );
}
