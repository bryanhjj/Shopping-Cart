import React from 'react';

function About() {
    return (
        <div className='about-container'>
            <div className='banner-container'>
                <img src='https://bo2.ggame.jp/en/images/info/tit_ctg.png' alt='information' />
            </div>

            <div className='about-info'>
                <div className='about-info-inner'>
                    <div className='info-top'>
                        <h3>About us</h3>
                    </div>

                    <article className='about-description'>
                        <p>Founded since U.C. 0090, we have been supplying our customers with reliable Mobile Suits at affortable prices.</p>
                        <br/>
                        <p>Our Mobile Suits come from reliable sources, and some even from the manufacturers themselves such as Anahiem Electronics.</p>
                        <br/>
                        <p>With our latest supply ships deployed, we'll ensure your Mobile Suits are delivered to you safely, and swiftly.</p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default About;