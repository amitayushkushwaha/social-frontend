import React from "react";
import styles from "@/styles/Suggestion.module.css";
import person1 from "assets/images/profileimage2.jpg";
import person2 from "assets/images/profileimage3.jpg";
import person3 from "assets/images/profileimage4.jpg";
import person4 from "assets/images/profileimage5.jpg";
import Image from "next/image";

const SuggestionBox = ({ peopleData }) => {
  return (
    <div className={styles.suggestionBox}>
      <h2 className={styles.title}>You may know</h2>
      <div className={styles.peopleList}>
        <div className={styles.person}>
          <Image src={person1} alt={"Amogh"} />
          <p className={styles.personName}>{"Amogh"}</p>
        </div>
        <div className={styles.person}>
          <Image src={person2} alt={"Amogh"} />
          <p className={styles.personName}>{"Amit"}</p>
        </div>
        <div className={styles.person}>
          <Image src={person3} alt={"Amogh"} />
          <p className={styles.personName}>{"Aman"}</p>
        </div>
        <div className={styles.person}>
          <Image src={person4} alt={"Amogh"} />
          <p className={styles.personName}>{"Nishant"}</p>
        </div>
        <div className={styles.person}>
          <Image src={person1} alt={"Amogh"} />
          <p className={styles.personName}>{"Amogh"}</p>
        </div>
        <div className={styles.person}>
          <Image src={person2} alt={"Amogh"} />
          <p className={styles.personName}>{"Amit"}</p>
        </div>
        <div className={styles.person}>
          <Image src={person3} alt={"Amogh"} />
          <p className={styles.personName}>{"Aman"}</p>
        </div>
        <div className={styles.person}>
          <Image src={person4} alt={"Amogh"} />
          <p className={styles.personName}>{"Nishant"}</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionBox;
