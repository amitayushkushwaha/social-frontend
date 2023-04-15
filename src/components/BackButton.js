import React from "react";
import { ArrowBack } from "@mui/icons-material";
import styles from "@/styles/BackButton.module.css";
import { useRouter } from "next/router";

const BackButton = ({title}) => {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };
  return (
    <div
    className={styles.container}
    >
        <ArrowBack onClick={handleBackButton} className={styles.back_button} />
      <p className={styles.pageName} >{title}</p>
    </div>
  );
};

export default BackButton;
