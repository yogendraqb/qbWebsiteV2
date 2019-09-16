import React, {Component} from 'react'

export default() => {
    return (
        <div className='width-70 mg-100'>
            <div className='width-100 flex-column '>
                <label className="font-medium-30-dark mg-bot-18">Choose the plan that fits your business need</label>
                <span className=" font-medium-14-dark txt-center" style={infoStyle}>All plans include the essentials.</span>
            </div>
            <div className='flex-row'>
                {
                    planArray.map(m=>
                        <div className='flex-column' style={cardStyle}>
                            <span className='font-medium-20-dark mg-bot-25'>
                                {m.duration}
                            </span>
                            <span className='font-medium-36-blue'>
                                {m.amount}
                            </span>
                            <span className='font-medium-14-dark  mg-bot-35'>
                                {m.interval}
                            </span>
                            <span className='font-medium-12-light  mg-bot-20'>
                                {m.desc}
                            </span>
                            <button className='flex-row-center' style={buttonStyle}>
                                <span className='font-medium-14-white'>Choose</span>
                            </button>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    padding:'30px 20px',
    margin:'20px'
}

const infoStyle = {
    width: '552px',
    height: '60px'
}


const buttonStyle = {
    width: '111px',
    height: '30px',
    borderRadius: '15px',
    backgroundColor: '#498bdc',
    padding:'8px 30px'
}


const planArray = [
    {
        duration: 'Monthly',
        amount: '₹999.00',
        interval: 'per month',
        desc: 'Pay us on a monthly basis. Most flexible plan to let you operate on a minimum budget.'
    }, {
        duration: 'Half Yearly',
        amount: '₹916.50',
        interval: 'per month',
        desc: 'Pay us every six months. Get 15 days worth of FREE usage with our half-yearly plan.'
    }, {
        duration: 'Annualy',
        amount: '₹833.25',
        interval: 'per month',
        desc: 'Pay us every year. Get 2 months worth of FREE usage with our yearly plan.'
    }
]