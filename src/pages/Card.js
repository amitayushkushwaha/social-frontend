import styles from "./../styles/Card.module.css";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import profile from "assets/images/profileimage5.jpg";
import { CheckCircle } from "@mui/icons-material";
import amit from "assets/images/IMG20230331140350.jpg";
import Link from "next/link";
import { useState } from "react";
import Comments from "@/components/Comments";
import { FavoriteBorder, CommentOutlined } from "@mui/icons-material";
import { CommentForm } from "@/components/CommentForm";
import avatar from "assets/images/profileimage5.jpg";
import image from "assets/images/IMG20230331140350.jpg";

const Card = ({ username, postId, hasImage, hasLiked, ishisFriend }) => {
  const [isLiked, setIsLiked] = useState(hasLiked);
  const [isComment, setIsComment] = useState(false);
  const [isFriend, setIsFriend] = useState(ishisFriend);
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  const { render, handleShowComments } = Comments({
    areCommentsVisible,
    setAreCommentsVisible,
  });

  function handleFavouriteClick() {
    setIsLiked(!isLiked);
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
    <div className={styles.card__container}>
      <div className={styles.image__container}>
        <Image src={image} alt="Demo Image" className={styles.post__image} />
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

          <span className={styles.follow__btn} onClick={handleFriend} >{isFriend? "Following":"Follow +"}</span>
        </div>
        <div className="card__info-right">
          <span className="like__btn">
            {(isLiked && <FavoriteIcon fontSize="medium" onClick={handleFavouriteClick}/>) || (
              <FavoriteBorder fontSize="medium" onClick={handleFavouriteClick}/>
            )}
          </span>
        </div>
      </div>
      <div className={styles.post__info}>
        <span className={styles.post__caption}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
          doloremque ullam illum iste, dignissimos voluptatum molestiae, sit
          sint laboriosam doloribus at fugit nulla suscipit. Sunt soluta
          aspernatur aliquid quisquam facere!
        </span>
      </div>
      <div className={styles.post__comments}>
        <div className={styles.comments__btn}>
          <CommentOutlined fontSize="medium" onClick={handleComment} />
        </div>
      </div>
      {isComment && (
        <CommentForm setIsComment={setIsComment} URL={"https://............"} />
      )}
      {areCommentsVisible && render}
    </div>
  );
};

export default Card;
