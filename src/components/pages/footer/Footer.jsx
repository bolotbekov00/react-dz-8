import React from 'react';
import './Footer.css'
import img1 from '../../../img/footerImg/instagram.png'
import img2 from '../../../img/footerImg/telegram.png'
import img3 from '../../../img/footerImg/whatsapp.png'
import img4 from '../../../img/footerImg/facebook.png'
import FooterItems1 from "./footerItems/FooterItems1";
import FooterItems2 from "./footerItems/FooterItems2";
import FooterItems3 from "./footerItems/FooterItems3";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="footer-items-block">
                        <FooterItems1/>
                        <FooterItems2/>
                        <FooterItems3/>
                    </div>
                    <div className="footer-social-block">
                        <div className="footer-items-left">
                            <div className="social-items">
                            <a href="">
                                <img src={img1} alt="1" className="img-footer"/>
                            </a>
                            <span>@tombraider</span>
                        </div>
                        <div className="social-items">
                            <a href="">
                                <img src={img2} alt="1" className="img-footer"/>
                            </a>
                            <span>t.me/Tomb-raider</span>
                        </div>
                    </div>
                    <div className="footer-items-left">
                        <div className="social-items">
                            <a href="">
                                <img src={img3} alt="1" className="img-footer"/>
                            </a>
                            <span>www.whatsapp.com/</span>
                        </div>
                        <div className="social-items">
                            <a href="">
                                <img src={img4} alt="1" className="img-footer"/>
                            </a>
                            <span>www.facebook.com/</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
)
    ;
}

export default Footer;