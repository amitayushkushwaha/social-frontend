import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/signPage.module.css"
export default function Home() {
  const router=useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username !="" && password!=""){
    router.push("/amogh");
    }
    else {
      alert("Username and password didn't match")
    }
  }
  return (
    <>
      <Head>
        <title>Social Media</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.page_container}>
        <h1 className={styles.app_name}>AppName</h1>
      <form onSubmit={handleSubmit} className={styles.form} >
      <input className={styles.input}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br/>
      <input className={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
       <br/>
      <button type="submit" className={styles.button} >Sign in</button>
      <br/>
      <Link href="/signUpPage" className={styles.link} >Not a user? Sign up here</Link>
    </form>
    </div>
      </main>
    </>
  );
}
