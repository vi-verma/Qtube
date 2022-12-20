import React from 'react'
import Layout from '../../components/layout/Layout'
import { MainPoster } from '../../components/mainPoster/MainPoster'
import TrendingMoviesList from '../../components/trendingMovieslist/TrendingMoviesList'

const Home = () => {

    return (
        <Layout >
            <MainPoster />
            <TrendingMoviesList />
        </Layout>
    )
}

export default Home