import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/signPage.module.css";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPasseord] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirmedPassword == password && username!="" && password!="" && email!="") {
      setConfirmedPasseord("");
      setPassword("");
      setUsername("");
      setEmail("");
      router.push("/amogh");
    } else {
      if(username==""){
        alert("Username not filled")
      }
      else if(email==""){
        alert("Email not entered");
      }
      else if(password==""){
        alert("Please choose a suitable password")
      }
      else {
        alert("Passwords didn't match")
      }
    }
  };
  return (
    <>
      <Head>
        <title>Social Media</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.page_container}>
          <h1 className={styles.app_name}>AppName</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <input
              className={styles.input}
              type="password"
              placeholder="Confirm Password"
              value={confirmedPassword}
              onChange={(event) => setConfirmedPasseord(event.target.value)}
            />
            <br />
            <button type="submit" className={styles.button}>Sign Up</button>
            <br/>
            <Link href="/" className={styles.link}>Already a user? Login here</Link>
          </form>
        </div>
      </main>
    </>
  );
}
