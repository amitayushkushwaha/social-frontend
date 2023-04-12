import styles from "@/styles/Post.module.css"
import Router from "next/router";
import {motion} from 'framer-motion';
import React from 'react'

const CreateButton = () => {
    function handleButton() {
        Router.push("/create");
      }
  return (
    <div>
         <motion.button className={styles.trendingBtn} onClick={handleButton}
        whileHover = {{scale : 1.2}}
        >
          Create
        </motion.button>
    </div>
  )
}

export default CreateButton