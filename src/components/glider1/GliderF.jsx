import React from "react";
import "./gliderf.css";
import Glider from "react-glider";
import 'glider-js/glider.min.css';
import imagea from '../../assets/images/imagea.png'
import imageb from '../../assets/images/imageab.png'
import imagec from '../../assets/images/imageac.png'
import imgba from '../../assets/images/imgba.png'
import imgbc from '../../assets/images/imgbc.png'
import icona from '../../assets/images/slider-icon.png'
import hape from '../../assets/images/hape.png'



function GliderF() {
  return (
    <div className="container">
        <div className="trendingNft">
            <h2>Trending NFTs</h2>
        </div>
      <div className="gliderContainer">
      <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={3.5}
      slidesToScroll={1}
      className="gradient-outline"
    >
     {GliderData.map((gliderdata,ind)=>(

        <div className="gliderBox">
            <div>
            <img src={gliderdata.imagea}  alt="ajksj" />
            </div>
            <div className="gliderContent">
                <div>
                <img src={gliderdata.imgb}/>
                </div>
                <div className={gliderdata.crypto}>
                <h4>{gliderdata.h4}</h4>
                <p>{gliderdata.p}</p>

                </div>
                <div className={gliderdata.class} >
                    <img src={gliderdata.icon}/>
                </div>

            </div>
            <div className="gliderBottom">
                <div className="gliderBottomBox">
                    <h5>{gliderdata.h3a}</h5>
                    <p>{gliderdata.p2a}</p>
                </div>
                <div className="gliderBottomBox">
                    <h5>{gliderdata.h3b}</h5>
                    <p>{gliderdata.p2b}</p>
                </div>
                <div>
                    <h5>{gliderdata.h3c}</h5>
                    <p className={gliderdata.currencyClr}>{gliderdata.p3c}</p>
                </div>
            </div>
            
                {gliderdata.but && 
                <div className="gliderButton">
                    <button>{gliderdata.but}</button>
                </div>
 }
                
        </div>
     ))}
    
    </Glider>
      </div>
      <div className="gliderbotButon">
        <button>See More</button>
      </div>
    </div>
  );
}

export default GliderF;


const GliderData=[
    {
        but:'',
        imagea:imagea,
        imgb:imgba,
        h4:'CryptoPunk 3D #13',
        p:'3D cryptopunk',
        icon:icona,
        h3a:'9.61 ETH',
        p2a:'latest Bid',
        h3b:' 4.12 ETH',
        p2b:' from',
        h3c:'$103,025',
        p3c:'-2.25%',
        class:"gliderIcon",
        crypto:'gliderdata',
        currencyClr:'curencyClr2'

    },
    {
        but:'Collect Now',
        imagea:imageb,
        imgb:hape,
        h4:'HAPE #8064',
        p:'HAPE PRIME',
        icon:icona,
        h3a:'9.61 ETH',
        p2a:'latest Bid',
        h3b:' 4.12 ETH',
        p2b:' from',
        h3c:'$103,025',
        p3c:'-2.25%',
        class:"b",
        crypto:'gliderdata2',
        currencyClr:'curencyClr'
        


    },
    {
        but:'',
        imagea:imagec,
        imgb:imgbc,
        h4:'CryptoPunk 3D #13',
        p:'3D cryptopunk',
        icon:icona,
        h3a:'9.61 ETH',
        p2a:'latest Bid',
        h3b:' 4.12 ETH',
        p2b:' from',
        h3c:'$103,025',
        p3c:'-2.25%',
        class:"gliderIcon",
        crypto:'gliderdata',
        currencyClr:'curencyClr'

    },
    {
        but:'',
        imagea:imagec,
        imgb:imgbc,
        h4:'CryptoPunk 3D #13',
        p:'3D cryptopunk',
        icon:icona,
        h3a:'9.61 ETH',
        p2a:'latest Bid',
        h3b:' 4.12 ETH',
        p2b:' from',
        h3c:'$103,025',
        p3c:'-2.25%',
        class:"gliderIcon",
        crypto:'gliderdata',
        currencyClr:'curencyClr'

    },
    {
        but:'',
        imagea:imagec,
        imgb:imgbc,
        h4:'',
        p:'',
        icon:icona,
        h3a:'9.61 ETH',
        p2a:'latest Bid',
        h3b:' 4.12 ETH',
        p2b:' from',
        h3c:'$103,025',
        p3c:'-2.25%',
        class:"gliderIcon",
        crypto:'gliderdata',
        currencyClr:'curencyClr'

    },
]