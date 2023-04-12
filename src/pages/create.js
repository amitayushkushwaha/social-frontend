import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/signPage.module.css";
import { useRouter } from "next/router";
import BackButton from "@/components/BackButton";

const create = () => {
    const router=useRouter();
    const [image,setImage]=useState("");
    const [postContent,setPostContent]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(image !="" && postContent!=""){
            setImage("");
            setPostContent("");
            router.push("/amogh")
        }
        else if(postContent==""){
            alert("Write some content then post")
        }
        else {
            alert("Upload an image then post")
        }
    }
  return (
    <>
      <Head>
        <title>Create your Story</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
      <div style={{paddingTop:"3%",paddingLeft:"7%",backgroundColor:"var(--post-background-color)"}} >
        <BackButton/>
        </div>
      <div className={styles.page_container}>
          <h1 className={styles.app_name}>Share your Stories with others</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <textarea
              className={styles.input}
              type="text"
              placeholder="write your post here"
              value={postContent}
              onChange={(event) => setPostContent(event.target.value)}
            />
            <br />
            
            <button type="submit" className={styles.button}>Share</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default create;
