import React from "react";
import styles from "@/styles/allCommentsPage.module.css";
import commentProfileImage from "assets/images/profileimage3.jpg";
import Image from "next/image";
import Head from "next/head";
import Chillies from "assets/images/background.jpg";
import profile from "assets/images/profileimage5.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import CreateButton from "@/components/createButton";

export default function allComments() {
  // get the comment count
  const commentCount = 10;
  const comments = [];
  // Get the data from the server side rendering

  for (var i = 0; i < commentCount; ++i) {
    comments.push(
      <div className={styles.comment__div} key={i} >
        <div className={styles.userInfo}>
          <Image src={commentProfileImage} alt={"Profile Image"} />
          <Link href="/profile">
          <span className={styles.username}>Amogh Tiwari</span>
          </Link>
        </div>
        <p className={styles.commentContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tincidunt ante eu metus viverra, lacinia lobortis mi tincidunt. Nam
          sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse mollis, velit in congue facilisis, eros odio vestibulum
          odio, eu dignissim.
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
        <Navbar/>
        <CreateButton/>
        <div style={{paddingTop:"3%",paddingLeft:"7%",backgroundColor:"var(--post-background-color)"}} >
        <BackButton/>
        </div>
       
        <div className={styles.container}>
          <div className={styles.post}>
            <div className={styles.post__cards}>
              <Image
                className={styles.post__profile__image}
                src={profile}
                alt="Profile Image"
              />
              <p className={styles.post__username}> <Link href="/profile">  {"Amogh Tiwari"} </Link></p>
            </div>

            {true && (
              <Image
                className={styles.post__image}
                src={Chillies}
                alt="Post Image"
              />
            )}
            <p className={styles.post__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis maximus neque quis mattis. Donec posuere sem
              quis vulputate ultrices. Aenean ut massa consequat, ultricies
              magna et, aliquet dolor. Donec pulvinar tortor et nibh cursus
              hendrerit. Cras porta, felis id rhoncus convallis, ante ipsum
              tristique magna, at porta metus tellus non tellus. Mauris non
              eleifend metus. Nulla fringilla augue sed sollicitudin laoreet.
              Duis vel dapibus augue. Duis nec quam non odio mollis lacinia.
              Mauris quis placerat ex.
            </p>
          </div>

          <div className={styles.comment__container}>
            <h2 className={styles.comment__name}>Comments...</h2>
            {comments}
          </div>
        </div>
      </main>
    </>
  );
}
