import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import Chillies from "assets/images/background.jpg";
import styles from "@/styles/Post.module.css";
import Image from "next/image";
import profile from "assets/images/profileimage5.jpg";
import { FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import { CommentForm } from "./CommentForm";
import { CheckCircle } from "@mui/icons-material";
import Comments from "./Comments";
import amit from "assets/images/IMG20230331140350.jpg";
import Link from "next/link";

export default function Post({
  username,
  postId,
  hasImage,
  hasLiked,
  ishisFriend,
}) {
  const [isClicked, setIsClicked] = useState(hasLiked);
  const [isComment, setIsComment] = useState(false);
  const [isFriend, setIsFriend] = useState(ishisFriend);
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  const { render, handleShowComments } = Comments({
    areCommentsVisible,
    setAreCommentsVisible,
  });

  function handleFavouriteClick() {
    setIsClicked(!isClicked);
    //Change into dataBase
    hasLiked = isClicked;
  }

  function handleComment() {
    handleShowComments();
    if (isComment == areCommentsVisible) {
      setIsComment(!isComment);
      setAreCommentsVisible(!areCommentsVisible);
    } else {
      setAreCommentsVisible(!areCommentsVisible);
    }
  }

  function handleFriend() {
    setIsFriend(!isFriend);
    // Update into database
    ishisFriend = isFriend;
  }

  return (
    <div className={styles.post}>
      <div className={styles.post__cards}>
        <Image src={profile} alt="Profile Image" />

        <p className={styles.post__username}>
          {" "}
          <Link href="/profile"> {username}</Link>
        </p>

        {(!isFriend && (
          <AddIcon
            className={`${styles.post__add} ${styles.post__large}`}
            onClick={handleFriend}
          />
        )) ||
          (isFriend && (
            <CheckCircle
              className={`${styles.post__add} ${styles.post__large}`}
              onClick={handleFriend}
            />
          ))}
      </div>
      {hasImage && <Image src={amit} alt="Post Image" />}
      <p className={styles.post__content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        mollis maximus neque quis mattis. Donec posuere sem quis vulputate
        ultrices.
      </p>
      <div className={styles.post__icon}>
        {(isClicked && (
          <FavoriteIcon
            className={`${styles.post__icons} ${styles.post__large}`}
            onClick={handleFavouriteClick}
          />
        )) ||
          (!isClicked && (
            <FavoriteBorder
              className={`${styles.post__icons} ${styles.post__large}`}
              onClick={handleFavouriteClick}
            />
          ))}
        <CommentIcon
          className={`${styles.post__icons} ${styles.post__large} ${styles.post__add}`}
          onClick={handleComment}
        />
      </div>
      {isComment && (
        <CommentForm setIsComment={setIsComment} URL={"https://............"} />
      )}
      {areCommentsVisible && render}
    </div>
  );
}
