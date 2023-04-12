import styles from "@/styles/Post.module.css";
import Router from "next/router";
import React from "react";

const CreateButton = () => {
  function handleButton() {
    Router.push("/create");
  }
  return (
    <div>
      <button className={styles.trendingBtn} onClick={handleButton}>
        +
      </button>
    </div>
  );
};

export default CreateButton;
