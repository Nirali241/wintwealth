import React from 'react'
import Deatils from './Deatils'
import FirstDeatils from './FirstDeatils'

function Contact() {
    return (
        
    <div  style={{display: "flex"}}>
            <div style={{width: "50%"}}>
                <FirstDeatils />
            </div>
            
            <div className="bg-info " style={{width: '50%'}}>
                <Deatils />
            </div>
    
      
      
    </div>
    )
}

export default Contact
