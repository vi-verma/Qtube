import styles from './MainPoster.module.css';

export const MainPoster = () => {
  return (
    <div className={styles.posterContainer}>
      <div className={styles.posterBodyTitle}>
        <p className={styles.title}>Explore</p>
        <p className={styles.description}>What are you gonna watch today ?</p>
      </div>
      <div className={styles.posterMain}>
        <div className={styles.linearGradient}>
          <p className={styles.posterTitle}>Avatar: The Way of Water</p>
          <p className={styles.posterDetails}>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.</p>
          {/* <img src='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg' alt='img' /> */}
        </div> 
      </div>
    </div>
  )
};
