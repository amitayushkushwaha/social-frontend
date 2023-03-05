import styles from "@/styles/Suggestion.module.css"
import Person from "@mui/icons-material/Person";
const SuggestionBox = ({id}) => {
  return( <div className={styles.suggestionBox}>
    <Person className={styles.suggestion__user__icon}/>
    <Person className={styles.suggestion__user__icon}/>
    <Person className={styles.suggestion__user__icon}/>
    <Person className={styles.suggestion__user__icon}/>
  </div>);
};

export default SuggestionBox;
