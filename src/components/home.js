import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1>The most reliable Mobile Suit distributor</h1>
                <h1>Founded since U.C. 0090</h1>
                <Link to='/shop'>
                    <button className='shop-now-btn'>Shop now</button>
                </Link>
            </div>
            <div className='test-triangle'></div>
            <footer>
                <div>
                    All rights reserved. Design and specifications are subject to change without notice.
                </div>
            </footer>
        </div>
    );
};

export default Home;