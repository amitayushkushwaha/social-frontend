import React from "react";
import styles from "@/styles/allCommentsPage.module.css";
import commentProfileImage from "assets/images/profileimage3.jpg";
import Image from "next/image";
import Head from "next/head";
import image from "assets/images/profileimage5.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import CreateButton from "@/components/createButton";
import avatar from "assets/images/profileimage5.jpg";

export default function allComments() {
  // get the comment count
  const commentCount = 10;
  const comments = [];
  // Get the data from the server side rendering

  for (var i = 0; i < commentCount; ++i) {
    comments.push(
      <div className={styles.comment__div} key={i}>
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
        <Navbar />
        <CreateButton />
        <BackButton title="Comments"/>
        <div className={styles.container}>
          <div className={styles.card__container}>
            <div className={styles.image__container}>
              <Image
                src={image}
                alt="Demo Image"
                className={styles.post__image}
              />
            </div>
            <div className={styles.card__info}>
              <div className={styles.card__info__left}>
                <span className={styles.avatar}>
                  <Image
                    src={avatar}
                    alt="Demo Image"
                    className={styles.avatar__image}
                  />
                </span>
                <Link href="/profile">
                  {" "}
                  <span className={styles.user__name}>Amit Kushwaha</span>
                </Link>
              </div>
            </div>
            <div className={styles.post__info}>
              <span className={styles.post__caption}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                doloremque ullam illum iste, dignissimos voluptatum molestiae,
                sit sint laboriosam doloribus at fugit nulla suscipit. Sunt
                soluta aspernatur aliquid quisquam facere!
              </span>
            </div>
          </div>

          <div className={styles.comment__container}>
            {comments}
          </div>
        </div>
      </main>
    </>
  );
}
