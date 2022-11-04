

import React from 'react'
import './metamask.css'
import metamask from '../../assets/images/metamask.png'
import metamask2 from '../../assets/images/meta2.png'
import metamask3 from '../../assets/images/meta3.png'
import exodus from '../../assets/images/exodus.png'
import exodus2 from '../../assets/images/exodus2.png'




function MetaMask() {
  return (
    <div className='container'>
        <div className='metamaskContainer'>
            <div className='metamaskContent'>
                <div className='metamaskBox'>
               
                    <img src={metamask}/>
                </div>
                <div className='metamaskBox'>
                    <img src={metamask2}/>
                
                </div>
                <div className='metamaskBox'>
                    <img src={metamask3}/>
                 
                </div>

            </div>
            <div className='metamaskBottom'>
                <div className='metabotomBox'>
                    
                    <img src={exodus}/>
                </div>
                <div className='metabotomBox'>
                    
                    <img src={exodus2} />
                </div>

            </div>

        </div>
    </div>
  )
}

export default MetaMask