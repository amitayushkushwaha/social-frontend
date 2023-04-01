import React from "react";
import commentProfileImage from "assets/images/profileimage3.jpg";
import Image from "next/image";
import styles from "@/styles/comments.module.css";
import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
export default function Comments({
  areCommentsVisible,
  setAreCommentsVisible,
}) {
  const [comments, setComments] = useState(null);
  const [commentCount, setCommentCount] = useState(4);

  const handleShowComments = () => {
    let tempComments = [];
    for (var i = 0; i < commentCount - 1; ++i) {
      tempComments.push(
        <div className={styles.comment__div} key={i}>
          <div className={styles.userInfo}>
            <Image
              // className={styles.avatar}
              src={commentProfileImage}
              alt="Profile Image"
            />
            <Link href='/profile'>
            <span className={styles.username}>Amogh Tiwari</span>
            </Link>
          </div>

          <p className={styles.commentContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tincidunt ante eu metus viverra, lacinia lobortis mi tincidunt. Nam
            sed.
          </p>
        </div>
      );
    }

    setComments(tempComments);
  };

  const handleShowAllComments = () => {
    Router.push("/allComments");
  };

  // To use handleShowComments return it in a object , then destructure it
  return {
    handleShowComments,
    render: (
      <div className={styles.comment__container}>
        {comments}
        <div className={styles.comment__viewmore__container}>
          <p
            className={styles.comment__viewmore}
            onClick={handleShowAllComments}
          >
            View More...
          </p>
        </div>
      </div>
    ),
  };
}
