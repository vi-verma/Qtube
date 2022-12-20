import Card from './Card';
import styles from './CardContainer.module.css';

const CardContainer = ({url, episode, title}) => {
    const baseURL = 'https://www.themoviedb.org/t/p/w440_and_h660_face';

    const imageurl = baseURL+url || 'https://www.themoviedb.org/t/p/w440_and_h660_face/iMmMxF6f2OonUrXrHKBLSYAhXly.jpg';
    const episodeno = episode ;
    const episodetitle = title || "Avatar";
  return (
    <div className={styles.cardContainer}>
        <Card url={imageurl} episode={episodeno}/>
        <p className={styles.containerFooter}>{episodetitle}</p>
    </div>
  )
};

export default CardContainer;
