import styles from "./../styles/Card.module.css";
import Image from "next/image";

import { FavoriteBorder, CommentOutlined } from "@mui/icons-material";

import avatar from "assets/images/profileimage5.jpg";
import image from "assets/images/IMG20230331140350.jpg";

const Card = () => {
  return (
    <div className={styles.card__container}>
      <div className={styles.image__container}>
        <Image src={image} alt="Demo Image" className={styles.post__image} />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__info__left}>
          <span className={styles.avatar}>
            <Image src={avatar} alt="Demo Image" class={styles.avatar__image} />
          </span>
          <span className={styles.user__name}>Amit Kushwaha</span>
          <span className={styles.follow__btn}>Follow</span>
        </div>
        <div className="card__info-right">
          <span className="like__btn">
            <FavoriteBorder fontSize="medium" />
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
          <CommentOutlined fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export default Card;
