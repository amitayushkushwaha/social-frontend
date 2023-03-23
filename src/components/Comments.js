import React from "react";
import commentProfileImage from "assets/images/profileimage3.jpg";
import Image from "next/image";
import styles from "@/styles/comments.module.css";
import { useState } from "react";
export default function Comments(areCommentsVisible,setAreCommentsVisible) {
  const [comments, setComments] = useState(null);
  const [commentCount, setCommentCount] = useState(4);
  
  const handleShowComments=()=> {
    setCommentCount(4);
    setAreCommentsVisible(!areCommentsVisible)
    console.log(commentCount);
    let tempComments = [];
    for (var i = 0; i < commentCount - 1; ++i) {
      tempComments.push(
        <div className={styles.comment__div}>
          <div className={styles.userInfo}>
            <Image
              className={styles.avatar}
              src={commentProfileImage}
              alt="Avatar"
            />
            <span className={styles.username}>Amogh Tiwari</span>
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
  }


  // To use handleShowComments return it in a object , then destructure it
  return ({
    handleShowComments,
    render:
    <div className={styles.comment__container}>
      <div className={styles.comment__div}>
        <div className={styles.userInfo}>
          <Image
            className={styles.avatar}
            src={commentProfileImage}
            alt="Avatar"
          />
          <span className={styles.username}>Amogh Tiwari</span>
          
        </div>
        <p className={styles.commentContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          tincidunt ante eu metus viverra, lacinia lobortis mi tincidunt. Nam
          sed.
        </p>
      </div>

      {comments}
      <p className={styles.comment__viewmore} >View More...</p>
    </div>
  }
  );
}
