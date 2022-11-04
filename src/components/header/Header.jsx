

import React from 'react'
import './Header.css'
import nftLogo from '../../assets/images/nft-logo.png'

function Header() {
  return (
    <div className='container'>
        <div className='headerContainer'>
    <div className='headerLogo'><img src={nftLogo} /> </div>
    
    <ul className='headerUl'>
        <li>Marketplace</li>
        <li>Collection</li>
        <li> Community</li>
        <li>Create</li>
        

    <div className='headerButon'><button>Connect Wallet</button></div>
    </ul>
    

</div>
    </div>
  )
}

export default Header