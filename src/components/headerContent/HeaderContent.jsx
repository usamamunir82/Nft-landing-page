

import React from 'react'
import './headercontent.css'
import headerdatalogo from '../../assets/images/headercontent.png'

function HeaderContent() {
  return (
    <div className='container'>
        <div className='headerContent'>
<div className='headerData'>
    <h3>
    Discover
collect, & sell                Extraordinary 
NFTs 
    </h3>
    <p>
    the leading NFT Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.
    </p>
    <div className='headerDataButon'>
        <div className='headerbut1'>
        <button>Explore</button></div>
       <div className='headerbut2'> <button>Create</button></div>

    </div>
    <div className='contentCollection'>
        <div className='collectionBox'>
            <section className='rating' >432K+</section>
            <section className='ratingName'>Collections</section>

        </div>
        <div>
            <section className='rating'>432K+</section>
            <section className='ratingName'>Collections</section>

        </div>
        <div>
            <section className='rating'>432K+</section>
            <section className='ratingName'>Collections</section>

        </div>
    </div>
</div>
<div className='headerDataImg'>
    <img src={headerdatalogo}/>
</div>

        </div>
    </div>
  )
}

export default HeaderContent;