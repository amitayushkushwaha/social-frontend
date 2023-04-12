import React from "react";
import styles from "@/styles/message.module.css"
import profilePicture from "assets/images/profileimage3.jpg"
import Image from "next/image";

const Message = (likedPost) => {
    return ( 
        <div className={styles.message_container}>
            <div className={styles.image_container}>
                <Image src={profilePicture} alt={"profile image"}/>
            </div>
            <div className={styles.content}>
                <p className={styles.message} >Amogh Tiwari started following you </p>
            </div>
        </div>
     );
}
 
export default Message;