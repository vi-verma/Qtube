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
            <div style={{ display: 'flex' }}>
                <h1>Anonime</h1>
                <div className={styles.menu}>
                    <p style={{ marginRight: '15px' }} onClick={() => navigate('/home')}>Home</p>
                    <p onClick={() => navigate('/searchMovies')}>List anime</p>
                </div>
            </div>
            <div>
                <input type={'search'}
                    onChange={searchHendler}
                    placeholder='Search anime or movie '
                    style={{ padding: '10px 10px', borderRadius: '50px', width: '220px', border: 'none', background: '#374151' }}
                />
            </div>
        </div>
    )
};

export default Navigationbar;