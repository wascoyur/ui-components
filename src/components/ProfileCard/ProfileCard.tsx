import styles from "./ProfileCard.module.css";
import backgroundImage from "assets/images/engineering.jpg";
import avatar from "assets/images/profile.jpg";

export const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.background}>
        <img src={backgroundImage} alt="background" />
      </div>
      <div className={styles.avatarPicture}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.content}>
        <p className={styles.profileName}>Jason Alexander</p>
        I'm JavaScript full-stack engineer, love working with <em>
          React
        </em> and <em>Node.js</em>.
      </div>
    </div>
  );
};

export default ProfileCard;
