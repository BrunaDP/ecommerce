import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
const Home = () => {
    return (
        <div>
            <div>
                <HeroBanner />
                <div className='products-heading'>
                    <h2>Best Seller Products</h2>
                    <p>teste</p>
                </div>
            </div>

            <div className='products-container'>
                {['Product 1', "Product 2"].map((product) => product)}
            </div>
            <FooterBanner />
        </div>
    )
}

export default Home