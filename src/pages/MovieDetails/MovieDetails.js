import styles from './MovieDetails.module.css';
import { useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Card from '../../components/card/Card';
import { useMemo } from 'react';

const MovieDetails = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('id');
    const searchKey = searchParams.get('search');

    const allMoviesList = useSelector((state) => state.allMoviesList);
    const movieData = useMemo(()=> {
        return (searchKey ? allMoviesList.searchMoviesList.list : allMoviesList.movieList.list ).filter((movie) => movie.id == query)[0]
    },[searchParams.get('id')]);

  return (
    <div className={styles.detailCard}>
        <div className={styles.imgdetail}>
            <div>
                <Card Imgurl={movieData.poster_path} />
            </div>
            <div>
                <p>TItle : <span>{movieData.original_title}</span></p>
                <p>Release Date : <span>{movieData.release_date} </span></p>
                <p>Type : <span>{movieData.media_type} </span></p>
                <p>Duration : <span>{movieData.title} </span></p>
                <p>Rating : <span> {movieData.vote_average}</span></p>
                <p>Vote : <span> {movieData.vote_count}</span></p>
            </div>
        </div>
        <div>
            <p>Sypnosys :</p>
            <p>{movieData.overview}</p>
        </div>
    </div>
  )
}

export default MovieDetails