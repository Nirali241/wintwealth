import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import AOS from 'aos'

function FirstDeatils() {
    AOS.init()
    return (
        <div className="container py-5 px-5" style={{width: "100%" ,height:"100vh"}} >
            <div className="text-secondary fs-1 " data-aos="zoom-in-up" data-aos-offset="200"><strong>We're here</strong></div>
            <div className="text-secondary fs-5 mt-3">Our door is always open for a good cup of coffee.</div>
            <br /><br /><br /><br/>
            <div className="text-secondary py-5 px-5">
                <div className="fs-3 ">Our Office.</div>
                    <div className="fs-6 mt-3">
                        <div>Jacob van Lennepkade 334-H</div>
                        <div>1053 NJ Amsterdm</div>
                        <div>The Netherlands NL</div>
                    </div>
                    <div className="fs-4 mt-2 ">
                        <InstagramIcon />&nbsp;
                        <TwitterIcon />&nbsp;
                        <EmailIcon />
                    </div>
                </div>
            
        </div>
    )
}

export default FirstDeatils
