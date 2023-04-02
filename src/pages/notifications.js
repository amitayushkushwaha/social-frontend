import Head from "next/head";
import Message from "@/components/message";
import styles from "@/styles/message.module.css"
import Navbar from "@/components/Navbar";
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
        <div className={styles.allMessageContainer}>
            <p className={styles.heading}>messages</p>
            {messages}
        </div>
        
      </main>
    </>
  );
}
