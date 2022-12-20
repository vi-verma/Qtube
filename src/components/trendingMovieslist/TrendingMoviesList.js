import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardContainer from '../card/CardContainer';
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from 'react-redux';
import {getMovieList} from './../../store/reducer/moviesReducer';


const TrendingMoviesList = () => {
    const allMoviesList = useSelector((state) => state.allMoviesList);
    const dispatch = useDispatch();
    // const [movies, setMovies] = useState([]);
    // const [pageCount, setPageCount] = useState({ page: 0, total_pages: 0, total_results: 0 });
    const [moreData, setMoreData] = useState(true);

    useEffect(() => {
        fetchMovies();
    }, []);

    let fetchMovies = async (page) => {
        let pageno = page || 1;

        try {
            const response = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=9a3cb9dfa9766a01f14b910fa0f1ac4a&page=${pageno}`);
            // setMovies(prev => [...prev, ...response?.data?.results]);
            dispatch(getMovieList(response?.data))
            // setPageCount({ page: response?.data?.page, total_pages: response?.data?.total_pages, total_results: response?.data?.total_results })

        } catch (error) {
            console.error(error)
        };
    };

    let fetchMoreData = () => {
        debugger
        if (allMoviesList.movieList?.total_pages <= allMoviesList.movieList?.page) {
            setMoreData(false);
            return;
        }
        fetchMovies(+allMoviesList.movieList?.page + 1);
    };


    return (
        <div style={{ width: '88%', margin: 'auto' }}>
            <InfiniteScroll
                dataLength={allMoviesList.movieList.list?.length}
                next={fetchMoreData}
                hasMore={moreData}
                loader={<h4>Loading...</h4>}
                height={600}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div style={{ display: 'flex', flexFlow: 'wrap' }}>
                    {allMoviesList.movieList.list?.map((movie, idx) => {
                        return <CardContainer
                            key={idx}
                            url={movie.poster_path}
                            title={movie.title}
                        />
                    })}
                </div>
            </InfiniteScroll>

        </div>

    )
};

export default TrendingMoviesList;