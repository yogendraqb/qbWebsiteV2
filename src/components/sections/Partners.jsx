import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import our_partners from '../../assets/images/our_partners.png'


class Partners extends Component {
    render() {
        return (
            <div className='width-70 mg-100'>
                <div className='width-100 flex-column  mg-bot-18'>
                    <label className="font-medium-30-dark">Our Partners</label>
                </div>
                <div className='flex-row'>
                    {/* <img  src={our_partners}/> */}
                </div>
            </div>
        )
    }
}

export default Partners