import React,{Component} from 'react'
import Header from '../common/Header'
import SliderScreen from '../sections/SliderScreen'
import BusinessTypes from '../sections/BusinessTypes'
import Features from '../sections/Features'
import Plans from '../sections/Plans'
import FAQ from '../sections/FAQ'
import Testimonials from '../sections/Testimonials'
import Partners from '../sections/Partners'
import './landing.scss'

class LandingPage extends Component{
    render(){
        return(
            // <div className="header-div">
            <div>
                <Header/>
                <SliderScreen />
                <BusinessTypes />
                <Features />
                <Plans />
                <FAQ/>
                <Testimonials/>
                <Partners/>
            </div>
            // </div>
        )
    }
}

export default LandingPage