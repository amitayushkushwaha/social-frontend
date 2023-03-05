import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/CommentForm.module.css";

export function CommentForm({ URL, setIsComment }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //Logic to add comment to database
    setInputValue("");
    setIsComment(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.comment__form}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={inputValue}
        onChange={handleChange}
        className={styles.comment__input}
      />
      

      <button type="submit" className={styles.comment__button}>
        Post
      </button>
    </form>
  );
}
