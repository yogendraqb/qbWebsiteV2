import React,{Component} from 'react'
import retail_store from '../../assets/images/retail_store.png'
import grocery_store from '../../assets/images/grocery_store.png'
import departmental_store from '../../assets/images/departmental_store.png'
import coffee_shop from '../../assets/images/coffee_shop.png'
import spa_saloon from '../../assets/images/spa_saloon.png'
import pizza_outlet from '../../assets/images/pizza_outlet.png'
import fine_dining from '../../assets/images/fine_dining.png'
import pubs_bar from '../../assets/images/pubs_bar.png'

class BusinessTypes extends Component{

 cardAray=[
    [{image:departmental_store},{image:grocery_store},{image:coffee_shop},{image:retail_store},],
    [{image:spa_saloon},{image:pizza_outlet},{image:pubs_bar},{image:fine_dining},]
]

    render(){
        return(
          <div className='width-70 mg-60'>
              <div className='width-100 flex-column mg-bot-40'>
                <label className="font-medium-30-dark">Business Types</label>
                <span className=" font-medium-14-dark txt-center" style={infoStyle}>We are dedicated to providing our partners with exceptional partnership opportunities and sustainable business.</span>
              </div>
              <content className=''>
                  {
                      this.cardAray.map((m,i)=>{
                        return <div className="mg-20" style={{display:'flex'}}>
                            {
                                m.map(a=>{
                                    return <div>
                                                <div>
                                                    <img className='width-100' src={a.image} />
                                                </div>
                                                {/* <div className='businessType-card-footer'>
                                                    <span>
                                                        {a.label}
                                                    </span>
                                                </div> */}
                                    </div>
                                })
                            }
                      </div>
                      })
                  }
              </content>
          </div>
        )
    }
}

const infoStyle={
    width: '552px',
    height: '60px'
}

export default BusinessTypes