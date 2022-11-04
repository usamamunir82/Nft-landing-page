

import React from 'react'
import Glider from "react-glider";
// import 'glider-js/glider.min.css';
import './cateories.css'
import maina from '../../assets/images/maina.png'
import main2 from '../../assets/images/main2.png'
import main3 from '../../assets/images/main2.png'
import suba from '../../assets/images/suba.png'
import subb from '../../assets/images/subb.png'
import sub2 from '../../assets/images/sub2.png'
import sub2b from '../../assets/images/sub2b.png'
import sub3 from '../../assets/images/sub3.png'
import sub3b from '../../assets/images/sub3b.png'










function Categories() {
  return (
    <div className='container'>
        <div className='categoriesContainer'>
        <Glider
        className='gliderCategory'
  draggable
  hasArrows
  hasDots
  slidesToShow={3}
  slidesToScroll={1}
>
  <div className='boxglider2'>
    <div className='subBoxGlider'>
        <div className='glidersubimg'>
        <img src={suba} />
        <img src={subb}/>
        </div>
<div>
<img src={maina}/>
</div>
    </div>
    <div className='gliderP'>
    <p>Art</p>
    </div>
  </div>
  <div className='boxglider2'> 
    <div className='subBoxGlider'>
        <div className='glidersubimg' >
        <img src={sub2} />
        <img src={sub2b}/>
        </div>
<div>
<img src={main2}/>
</div>
    </div>
    <div className='gliderP'>
    <p>Collectibles</p>
    </div>
    </div>
  <div className='boxglider2'>
  <div className='subBoxGlider'>
        <div className='glidersubimg'>
        <img src={sub3} />
        <img src={sub3b}/>
        </div>
<div>
<img src={main3}/>
</div>
    </div>
    <div className='gliderP'>
    <p>Virtual Worlds & Metaverse</p>
    </div>
  </div>
 
</Glider>
        </div>
        <div className='glider2But'>
            <button>see more</button>
        </div>
    </div>
  )
}

export default Categories