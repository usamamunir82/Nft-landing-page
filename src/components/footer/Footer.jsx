import React from "react";
import "./footer.css";
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { SiGooglehangouts } from 'react-icons/si';
import logo from '../../assets/images/nft-logo.png'





function Footer() {
  return (
    <div className="container">
      <div className="footerContainer">
        <div className="footerTop">
          <h2>Get More Updates</h2>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks
          </p>
          <div className="footerInput">
            <input placeholder="Your Email ..." />
            <button>I'm in</button>
          </div>
          <div className="footerLine">

          </div>
          </div>
          <div className="footerBottom">
            <div className="footerBox">
                <img src={logo}/>
                <p>
                the leading NFT Marketplace on Ethereum.Home to the next generation of digital creators.Discover the best NFT collections.
                </p>
                <div className="footerIcon">
                    <div >
<AiOutlineTwitter className="footeric"/>
</div>
<div>
<AiOutlineYoutube className="footeric"/>
</div>
<div>
<FiInstagram className="footeric"/>
</div>
<div>
<SiGooglehangouts className="footeric"/>
</div>
                </div>

            </div>
            <div className="footerbox2">
                <h2>
                Marketplace
                </h2>
                <ul className="footerUl">
                    <li>explore</li>
                    <li>articles</li>
                    <li>how it work</li>
                    <li>help</li>

                </ul>
            </div>
            <div className="footerbox2">
                <h2>
                Marketplace
                </h2>
                <ul className="footerUl">
                    <li>explore</li>
                    <li>articles</li>
                    <li>how it work</li>
                    <li>help</li>

                </ul>
            </div>

          </div>
          
        </div>
      </div>
    
  );
}

export default Footer;
