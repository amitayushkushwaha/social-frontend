import Dropdown from "@/components/Dropdown";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Trending from "@/components/Trending";
import Head from "next/head";
import BackButton from "@/components/BackButton";

export default function trending() {
  return (
    <>
      <Head>
        <title>Social Media/Aman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar/>
        <div style={{paddingTop:"3%",paddingLeft:"3%",backgroundColor:"var(--post-background-color)"}} >
        <BackButton/>
        </div>
        
        {/* <Topbar /> */}
        <Trending />
        
      </main>
    </>
  );
}
