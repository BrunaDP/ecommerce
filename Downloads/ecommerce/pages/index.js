import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
const Home = () => {
    return (
        <>
            <div>
                <HeroBanner />
                <div className='p'>
                    <a>Best Seller Products</a>
                    <p>teste</p>
                </div>
            </div>
            <div className='products-container'>
                {['Product 1', "Product 2"].map((product) => product)}
            </div>
            <FooterBanner />
        </>
    )
}

export default Home