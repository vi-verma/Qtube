import styles from './Card.module.css';

export const Card = ({ url, episode }) => {

    return (
        <div
            style={{background: `url(${url})`}} 
            className={styles.card}>

            <div className={styles.linearGradient}>
                {/* <img src={url} width="100%" style={{ borderRadius: '12px' }} /> */}
                <p className={styles.cardEpisode}>{episode}</p>
            </div>
        </div>
    );
};

export default Card;