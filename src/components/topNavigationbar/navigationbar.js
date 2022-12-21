import styles from './navigationbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const Navigationbar = () => {
    const allMoviesList = useSelector((state) => state.allMoviesList);

    const navigate = useNavigate();

    const searchHendler = (event) => {
        if (event.target.value.length > 3) {
            navigate(`/searchMovies?search=${event.target.value}`);
        }
    };

    return (
        <div className={styles.navigation}>
            <div className={styles.menu}>
                <p className={styles.menuTitle}>Anonime</p>
                <div className={styles.subMenu}>
                    <p style={{ marginRight: '15px', fontSize:'2vw', fontWeight: 'bold' }} onClick={() => navigate('/home')}>Home</p>
                    <p style={{fontSize:'2vw', fontWeight: 'bold'}} onClick={() => navigate('/searchMovies')}>List anime</p>
                </div>
            </div>
            <div>
                <input type={'search'}
                    onChange={searchHendler}
                    placeholder='Search anime or movie '
                    className={styles.searchinput}
                />
            </div>
        </div>
    )
};

export default Navigationbar;