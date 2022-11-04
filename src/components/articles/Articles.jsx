

import React from 'react'
import './articles.css'
import article1 from '../../assets/images/article1.png'
import article2 from '../../assets/images/article2.png'
import article3 from '../../assets/images/article3.png'


function Articles() {
  return (
    <div className='container'>
        <div className='articleTop'>
        <div className='article'>
            <h2>Articles</h2>
        </div>
        <div className='articlesContainer'>
            <div className='articlesBox'>
                <img src={article1} />
                <div className='lowered'>
                <h2>
                We've lowered marketplace fees on all your favorite NFTs
                </h2>
                <p>
                January 23, 2022
                </p>
                </div>
            </div>
            <div className='articlesBox'>
                <img src={article2}/>
                <div className='lowered'>
                <h2>
                We've lowered marketplace fees on all your favorite NFTs
                </h2>
                <p>
                January 23, 2022
                </p>
                </div>
            </div>
            <div className='articlesBox'>
                <img src={article3}/>
                <div className='lowered'>
                <h2>
                We've lowered marketplace fees on all your favorite NFTs
                </h2>
                <p>
                January 23, 2022
                </p>
                </div>
            </div>

        </div>
        <div className='articlesButBotom'>
            <button>see more</button>
        </div>
        </div>
    </div>
  )
}

export default Articles