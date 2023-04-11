import styles from "@/styles/Dashboard.module.css";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BackButton from "@/components/BackButton";
export default function About() {
  return (
    <div className={styles.about}>
      <div style={{paddingTop:"3%",paddingLeft:"3%",backgroundColor:"var(--post-background-color)"}} >
        <BackButton/>
        </div>
      <div className={styles.about_header}>
        <h1>About Us</h1>
        <i>
          <VolunteerActivismIcon />
        </i>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
