import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import f1 from "../../assets/images/frontimage.png";
import ff1 from "../../assets/images/orange_pos.png";
import f2 from "../../assets/images/f2.png";
import f3 from "../../assets/images/f3.png";
import f4 from "../../assets/images/f4.png";
import f5 from "../../assets/images/f5.png";
import f6 from "../../assets/images/f6.png";
import "./slider.scss"
import StartTrial from './StartTrial'
import Videoq from '../../assets/images/pos_video.mp4'

class Slider extends Component {
    render() {
        return (
            <div>

                <video autoPlay muted loop id="myVideo">
                    <source src={Videoq} type="Videoq/mp4" />
                    <source src={Videoq} type="video/ogg" />
                </video>  

                    <div  className="content"> 
                            <h4>Queuebuster Point of Sale</h4>
                            <p>
                                A powerful Point of Sale and Inventory Management for restaurants, coffee shops,
                                spa and more. Small or Big Business Queuebuster promiseses you a great POS
                                Service.
                                
                            </p>
                            <button className='btn btn-lg btn-primary'>
                                Request a Quote 
                            </button>
                    </div>  
                <StartTrial />
            </div>
        )
    }
}


export default Slider