import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import Chillies from "assets/images/background.jpg";
import styles from "@/styles/Post.module.css";
import Image from "next/image";

export default function Post({ username, postId, hasImage }) {
  return (
    <div className={styles.post}>
      <div className={styles.post__cards}>
        <PersonIcon color="secondary" fontSize="large" />
        <p className={styles.post__username}>{username}</p>
      </div>

      {{ hasImage } && <Image className={styles.post__image} src={Chillies} />}
      <p className="post__content">
        sijgipjgirej rjgoirejo hejoerh thi htihk thtkh thkoek rho rkekojjmholt
        iifjuihituyj9jmi tjjhre hjrejgs jgirjyrsnihm
      </p>
      <div className={styles.post__icon}>
        <FavoriteIcon className={styles.post__icons}/>
        <CommentIcon className={styles.post__icons}/>
        <AddIcon className={styles.post__add} />
      </div>
    </div>
  );
}
