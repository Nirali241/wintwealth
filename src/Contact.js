import React from 'react'
import Deatils from './Deatils'
import FirstDeatils from './FirstDeatils'
import AOS from 'aos'

function Contact() {
    AOS.init()
    return (
        
    <div  style={{display: "flex"}}>
            <div style={{width: "50%"}}>
                <FirstDeatils />
            </div>
            
            <div className="bg-info " style={{width: '50%'}} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <Deatils />
            </div>
    
      
      
    </div>
    )
}

export default Contact
