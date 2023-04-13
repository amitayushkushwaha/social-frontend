import Head from "next/head";
import Message from "@/components/message";
import styles from "@/styles/message.module.css"
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
export default function Notifications() {
    
    const messages=[];

    for(var i=0;i<15;i++){
        messages.push(
            <div key={i}>
                <Message/>
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
        <Navbar/>
        <BackButton title="Notifications"/>
        <div className={styles.allMessageContainer}>
            {messages}
        </div>
        
      </main>
    </>
  );
}
