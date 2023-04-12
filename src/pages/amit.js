
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import BackButton from "@/components/BackButton";

export default function trending() {
  return (
    <>
      <Head>
        <title>Social Media/Amit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar/>
        <div style={{paddingTop:"3%",paddingLeft:"3%",backgroundColor:"var(--post-background-color)"}} >
        <BackButton/>
        </div>
        <Dashboard/>
        {/* <Sidebar/> */}
      </main>
    </>
  );
}
