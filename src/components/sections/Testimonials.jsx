import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./testimonial.scss"
// import "./slider.scss"
import person_1 from '../../assets/images/person_1.png'
import person_2 from '../../assets/images/person_2.png'
import person_3 from '../../assets/images/person_3.png'

class Testimonials extends Component {
    render() {
        return (
            <div className='width-100' style={{padding:'60px 0', backgroundColor:"#f7f7f7"}}>
            <div className=''>
                <div className='width-100 flex-column mg-bot-40'>
                    <label className="font-medium-30-dark">Some words from our clients</label>
                </div>

                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    axis={"horizontal"}
                    emulateTouch={true}
                    centerMode
                    centerSlidePercentage={33.34}
                    emulateTouch>
                    <div className='flex-row' style={{flexDirection:'column' , alignItems:'center',}}>
                        <img src={person_1}/>
                        <div className="legend" id="legend">
                            <p>
                                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
                                posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae
                                est.
                            </p>
                            <div>
                                <span  className='font-medium-16-dark'>
                                    Melissa Dean
                                </span>
                                <label className='font-medium-16-light'>Business Manager, Shopprix Mart</label>
                            </div>

                        </div>
                    </div>

                    <div className='flex-row' style={{flexDirection:'column' , alignItems:'center',}}>
                        <img src={person_2}/>
                        <div className="legend " id="legend">

                            <p>
                                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
                                posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae
                                est.
                            </p>
                            <div>
                                <span className='font-medium-16-dark'>
                                    Kenneth Stanley
                                </span>
                                <label className='font-medium-16-light'>Staff, Creame Bell</label>
                            </div>

                        </div>
                    </div>

                    <div className='flex-row' style={{flexDirection:'column' , alignItems:'center',}}>
                        <img src={person_3}/>
                        <div className="legend " id="legend">
                            <p>
                                Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero
                                posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae
                                est.
                            </p>
                            <div>
                                <span  className='font-medium-16-dark'>
                                    Linda Bennett
                                </span>
                                <label className='font-medium-16-light'>CTO, Celucose Ltd.</label>
                            </div>

                        </div>
                    </div>
                </Carousel>
            </div>
            </div>
        )
    }
}

export default Testimonials