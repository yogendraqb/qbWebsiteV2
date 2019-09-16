import React,{Component} from 'react'
import './startTrial.scss'


class StartTrial extends Component{
    render(){
        return(
            <div className="trial-div">
                <h4>Start your 14-days trial now.</h4>
                <div className='assurance'>Don't worry, We hate spam just as much as you do!</div>
                <div className='input-div'>
                    <input placeholder='Business Name'/>
                    <span>
                        <select></select>
                        <input  placeholder='Mobile Number'/>
                    </span>
                    <button> <span>Try for free</span></button>
                </div>

              
            </div>
        )
    }
}

export default StartTrial