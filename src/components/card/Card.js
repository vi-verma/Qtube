import styles from './Card.module.css';

export const Card = ({ url,Imgurl,  episode }) => {
    const baseURL = 'https://www.themoviedb.org/t/p/w440_and_h660_face';

    return (
        <div
            style={{background: url ? `url(${baseURL+url})` : 'none'}} 
            className={styles.card}>

            <div className={styles.linearGradient}>
            {Imgurl?.length && <img src={baseURL+Imgurl} width="100%" style={{ borderRadius: '12px', objectFit: 'contain', backgroundRepeat:'no-repeat' }} />}
                <p className={styles.cardEpisode}>{episode}</p>
            </div>
        </div>
    );
};

export default Card;