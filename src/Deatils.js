import { Button } from 'react-bootstrap'
import React from 'react'
import { useHistory } from "react-router-dom";
import AOS from 'aos'

function Deatils() {
    AOS.init()
    let history = useHistory();

    function handleClick() {
      history.push("/Signup");
    }
    return (
        <div className="container mt-5 px-5" style={{width: "100%" ,height:"100vh"}} >
            <div className="text-light fs-1 "><strong>Let's talk.</strong></div>
            <div className="text-light fs-6 mt-3">Share your excitement with us.</div>
            <div className="text-light fs-6 " data-aos="fade-up" data-aos-offset="200">info@yummygum.com</div><br /><br /><br /><br/><br />
            <div className="text-light">
                <div className="fs-3 ">Let's talk about us.</div>
                    <div className="fs-5 mt-3">
                        <input type="radio" value="1" name="option" /> Your great project<br />
                        <input type="radio" value="2" name="option" /> Meeting for a coffee<br />
                        <input type="radio" value="3" name="option" /> Birds and bees<br />
                        <input type="radio" value="4" name="option" /> Plan a video call
                    </div>
            </div>
            <div className="fs-5 mt-5">
              
                <Button variant="outline-light" onClick={handleClick}>Next</Button>
            </div>
        </div>
    )
}

export default Deatils
