import React from 'react'
import { Container } from 'react-bootstrap'
import Cover from '../Cover'
import Footer from '../Footer/Footer'
import Brands from './Brands/Brands'
import Quality from './Quality/Quality'
import Trending from './Trending/Trending'


function Home() {
    return (
        <>
            <Cover/>
            <Trending/>
            <Quality/>
            <Brands/>
            <Footer/>
        </>
    )
}

export default Home
