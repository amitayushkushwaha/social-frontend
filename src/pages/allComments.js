import React from "react";
import styles from '@/styles/comments.module.css';
import commentProfileImage from "assets/images/profileimage3.jpg";
import Image from "next/image";
import Head from "next/head";
import Post from "@/components/Post";
import { useRouter } from "next/router";

export default function allComments(){
    // get the comment count
    const commentCount=10;
    const comments=[];
    // Get the data from the server side rendering



    for(var i=0;i<commentCount;++i){
        comments.push(
        <div className={styles.comment__div}>
          <div className={styles.userInfo}>
            <Image
              className={styles.avatar}
              src={commentProfileImage}
              alt={"Profile Image"} 
            />
            <span className={styles.username}>Amogh Tiwari</span>
          </div>
          <p className={styles.commentContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tincidunt ante eu metus viverra, lacinia lobortis mi tincidunt. Nam
            sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis, velit in congue facilisis, eros odio vestibulum odio, eu dignissim.
          </p>
        </div>
        );
    }

    
        return (
            <>
              <Head>
                <title>Social Media/Amogh/allComments</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <main>
                <div>
                <Post username={"Amogh "} hasImage={True} postId={123} hasLiked={true} ishisFriend={false}/>
                    {comments}
                </div>
              </main>
            </>
          );
    
}