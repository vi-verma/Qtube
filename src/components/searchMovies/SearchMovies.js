import CardContainer from '../card/CardContainer';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchMovies.module.css';
import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { getSearchMovieList , resetSearchState } from '../../store/reducer/moviesReducer';
import axios from 'axios';

const results ={
    results: [{}],
    page: 0, 
    total_pages: 0, 
    total_results: 0 
}

const SearchMovies = (props) => {
    const allMoviesList = useSelector((state) => state.allMoviesList);
    const dispatchEvent = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // reset search movies list when search input changes
        dispatchEvent(resetSearchState());

        // debounce function
        const getData = setTimeout(() => {
            fetchMovies(searchParams.get('search'));
        }, 1000)

        return () => clearTimeout(getData)
    }, [searchParams.get('search')]);

    let fetchMovies = async (key, page) => {
        if(key.length< 3) return;

        let pageno = page || 1;
        try {
            const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=9a3cb9dfa9766a01f14b910fa0f1ac4a&page=${pageno}&query=${key}`);
            dispatchEvent(getSearchMovieList(response?.data))

        } catch (error) {
            console.error(error)
        };
    };

    const fetchMore = () => {
        if(allMoviesList.searchMoviesList?.total_pages <= allMoviesList.searchMoviesList?.page) return;
        const query = searchParams.get('search');
        const page = +allMoviesList.searchMoviesList.page+1;
        fetchMovies(query, page);
    };

    return (
        <div style={{ width: '88%', margin: 'auto' }}>
            <div style={{ display: 'flex', flexFlow: 'wrap' }}>
                {allMoviesList.searchMoviesList.list?.map((movie, idx) => {
                    return <CardContainer
                        key={idx}
                        url={movie.poster_path}
                        title={movie.title}
                    />
                })}
            </div>
                <button className={styles.loadMoreButton} type='button' onClick={fetchMore}>Load more</button>
        </div>
    )
}

export default SearchMovies;