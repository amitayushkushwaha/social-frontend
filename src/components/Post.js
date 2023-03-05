import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import Chillies from "assets/images/background.jpg";
import styles from "@/styles/Post.module.css";
import Image from "next/image";
import profile from "assets/images/profileimage5.jpg"
import { FavoriteBorder } from "@mui/icons-material";
import { useState } from 'react';
import { CommentForm } from "./CommentForm";
import { CheckCircle } from "@mui/icons-material";

export default function Post({ username, postId, hasImage ,hasLiked,ishisFriend}) {
  const [isClicked, setIsClicked] = useState(hasLiked);
  const [isComment,setIsComment]=useState(false);
  const [isFriend , setIsFriend]=useState(ishisFriend);

  function handleFavouriteClick(){
    setIsClicked(!isClicked);
    //Change into dataBase
    hasLiked=isClicked;
  }

  function handleComment(){
    setIsComment(!isComment);
  }

  function handleFriend(){
    setIsFriend(!isFriend);
    // Update into database
    ishisFriend=isFriend;
  }

  return (
    <div className={styles.post}>
      <div className={styles.post__cards}>
        <Image className={styles.post__profile__image} src={profile}/>
        <p className={styles.post__username}>{username}</p>
      </div>

      { hasImage && <Image className={styles.post__image} src={Chillies} />}
      <p className="post__content">
        sijgipjgirej rjgoirejo hejoerh thi htihk thtkh thkoek rho rkekojjmholt
        iifjuihituyj9jmi tjjhre hjrejgs jgirjyrsnihm
      </p>
      <div className={styles.post__icon}>
        {(isClicked &&<FavoriteIcon className={styles.post__icons} onClick={handleFavouriteClick}/>) || 
        (!isClicked &&<FavoriteBorder className={styles.post__icons} onClick={handleFavouriteClick}/>)}
        <CommentIcon className={styles.post__icons} onClick={handleComment} />
        {(!isFriend &&<AddIcon className={styles.post__add} onClick={handleFriend}/>) ||
        (isFriend &&<CheckCircle className={styles.post__add} onClick={handleFriend}/>)}
      </div>
      {isComment && <CommentForm setIsComment={setIsComment} URL={"https://............"} />}
    </div>
  );
}
