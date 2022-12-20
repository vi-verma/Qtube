import Card from './Card';
import styles from './CardContainer.module.css';

const CardContainer = ({url,Imgurl, episode, title, onClick=()=>{}}) => {
    
    const episodeno = episode ;
    const episodetitle = title || "Avatar";
  return (
    <div onClick={onClick} className={styles.cardContainer}>
        <Card Imgurl={Imgurl} url={url} episode={episodeno}/>
        <p className={styles.containerFooter}>{episodetitle}</p>
    </div>
  )
};

export default CardContainer;
