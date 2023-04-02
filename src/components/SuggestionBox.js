import React from "react";
import styles from "@/styles/Suggestion.module.css";
import person1 from "assets/images/profileimage2.jpg";
import Image from "next/image";
import Link from "next/link";

const SuggestionBox = ({ peopleData }) => {
  const people=[];

  for(var i=0;i<16;++i){
    people.push(
      <Link href={"/profile"}>
        <div  className={styles.person } key={i} >
            <Image src={person1}  alt={"Amogh"}/>
            <p className={styles.personName}>{"Amogh"}</p>
          </div>
      </Link>
    )
  }

  return (
    <div className={styles.suggestionBox}>
      <h2 className={styles.title}>You may know</h2>
      <div className={styles.peopleList}>
        
          
          {people}

       
      </div>
    </div>
  );
};

export default SuggestionBox;
