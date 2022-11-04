
import React from 'react'
import './collection.css'
import imga from '../../assets/images/imga.png'
import imgb from '../../assets/images/imgb.png'
import imgc from '../../assets/images/imgc.png'
import imgd from '../../assets/images/imgd.png'
import imge from '../../assets/images/imge.png'
import imgf from '../../assets/images/imgf.png'
import imgg from '../../assets/images/imgg.png'
import imgh from '../../assets/images/imga.png'


function Collection() {
  return (
    <div className='conttainer'>
        <div className='toCollectionContainer'>
        <div className='topCollection'>
            <h2>Top Collections</h2>
        </div>
        <div className='collectionButton'>
            <button className='colectbut1'>Art</button>
            <button className='colectbut2'>Collectibles</button>
            <button className='colectbut2'>Metaverse</button>
            <button className='colectbut2'>Virtual Worlds</button>
            <button className='colectbut3'>Sports</button>
            <button className='colectbut3'>Music</button>

        </div>

        <div className='collectionContainer'>
            {
                CollectionData.map((collectdata,ind)=>(
                    <div className='collectionBox'>
                        <div> <img src={collectdata.imgA}/> </div>
                        <div className='boxh5'>
                            <h5>{collectdata.h5}</h5>
                            <p>{collectdata.p}</p>
                        </div>
                        <div className='collectionboxBottom'>
                            <div className='boxh6'>
                                <h6>{collectdata.h6}</h6>
                                <p>{collectdata.p2}</p>
                            </div>
                            <div className='boxh7'>
                                <h7>{collectdata.h7}</h7>
                                <p className={collectdata.classNoClr}>{collectdata.p3}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
        <div className='collectButBotom'>
            <button>see more</button>
        </div>
        </div>
    </div>
  )
}

export default Collection


const CollectionData=[
    {
        imgA:imga,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr'
    },
    
    {
        imgA:imgb,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr2'
    },
    {
        imgA:imgc,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr'
    },
    {
        imgA:imgd,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr'
    },
    {
        imgA:imge,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr2'
    },
    {
        imgA:imgf,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr'
    },
    {
        imgA:imgg,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr'
    },
    {
        imgA:imgh,
        h5:'COOLGUYZZ ',
        p:'Coolguyzz.io',
        h6:'1.5 ETH',
        p2:'Floor Price ',
        h7:'$2045.12',
        p3:'-12.45%',
        classNoClr:'boxNoClr2'
    },
    

]