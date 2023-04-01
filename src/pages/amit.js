
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function trending() {
  return (
    <>
      <Head>
        <title>Social Media/Amit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar/>
        <Dashboard/>
        {/* <Sidebar/> */}
      </main>
    </>
  );
}
