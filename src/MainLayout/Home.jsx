import React from 'react'
import Barand from '../Pages/Barand/Barand'
import Hero from '../Pages/Hero/Hero'
import NewArival from '../Pages/New Arival/NewArival'
import TopSelling from '../Pages/Top Selling/TopSelling'
import Browsers from '../Pages/Browsers/Browsers'
import Review from '../Pages/Review/Review'



export default function Home() {
    return (
        <div>
            <Hero></Hero>
            <Barand />
            <NewArival />
            <TopSelling />
            <Browsers />
            <Review />
        </div>
    )
}
