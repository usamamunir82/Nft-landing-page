

import React from 'react'
import './create.css'
import walet1 from '../../assets/images/walet1.png'
import walet2 from '../../assets/images/walet2.png'
import walet3 from '../../assets/images/walet3.png'


function Create() {
  return (
    <div className='container'>

        <div className='createContainer'>
            <div className='createNftContainer'>
            <div className='createNft'>
                <h2>Create and sell your NFTs</h2>
            </div>
            <div className='walletContainer'>
            <div className='walletBox'>
                <img src={walet1}/>
                <h2>
                Set up your wallet
                </h2>
                <p>
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.
                </p>
            </div>
            <div className='walletBox'>
                <img src={walet2}/>
                <h2>
                Set up your wallet
                </h2>
                <p>
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.
                </p>
            </div> <div className='walletBox'>
                <img src={walet3}/>
                <h2>
                Set up your wallet
                </h2>
                <p>
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.
                </p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Create