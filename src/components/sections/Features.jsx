import React, {Component} from 'react'
import restaurantPixel from '../../assets/images/restaurant_pixel.png'
import groceryPixel from '../../assets/images/grocery_pixel.png'
import spaPixel from '../../assets/images/spa_pixel.png'
import retailPixel from '../../assets/images/retail_pixel.png'
import check from '../../assets/icons/green_check.png'

export default() => {
    return (
        <div className='width-70 mg-100'>
            <div className='width-100 flex-column '>
                <label className="font-medium-30-dark mg-bot-18">Special features for your business type</label>
            </div>
            <div className='flex-row mg-80'>
                <div className='width-60'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        Restaurant Business
                    </label>
                    <p className='font-medium-16-dark'>
                        From table management, kitchen production to payment processing, you get speed
                        and accuracy with our POS systems built keeping in mind restaurant operations.
                    </p>
                    <ul style={ulStyle}>
                        <li className='font-medium-16-light mg-bot-8'>
                            It was a humorously perilous business for both of us
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Etiam elit Zuris non tempor quam, et lacinia
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Mauris accumsan eros eget libero posuere vulputate
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Pellentesque orci lectus, consectetur vel posuere posuere
                        </li>
                    </ul>
                    <span className='font-medium-16-blue'>
                        Learn More
                    </span>
                </div>
                <div className='width-40 text-right'>
                    <img src={restaurantPixel}/>
                </div>
            </div>
            <div className='flex-row mg-80'>
                <div className='width-40 text-left'>
                    <img src={groceryPixel}/>
                </div>
                <div className='width-60'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        Grocery Business
                    </label>
                    <p className='font-medium-16-dark'>
                        Grocery Store involves connsiderable responsibility which run on low profit
                        margins. You need to know the understanding of store management for a efficient
                        operation. Use Queuebuster to simplify your business and handle the store rush
                        with ease.
                    </p>
                    <ul style={ulStyle}>
                        <li className='font-medium-16-light mg-bot-8'>
                            It was a humorously perilous business for both of us
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Etiam elit Zuris non tempor quam, et lacinia
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Mauris accumsan eros eget libero posuere vulputate
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Pellentesque orci lectus, consectetur vel posuere posuere
                        </li>
                    </ul>
                    <span className='font-medium-16-blue'>
                        Learn More
                    </span>
                </div>
            </div>
            <div className='flex-row mg-80'>
                <div className='width-60'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        Spa & Saloon Business
                    </label>
                    <p className='font-medium-16-dark'>
                        Assiging staff is a major problem in spa & saloon industry. With Queuebuster,
                        assign staff to your customers and make them happy. Use our features of
                        appointments, inventory management and reports to monitor your business on a
                        daily basis. Keep track of your budget, manage inventory effectively and monitor
                        services.

                    </p>
                    <ul style={ulStyle}>
                        <li className='font-medium-16-light mg-bot-8'>
                            It was a humorously perilous business for both of us
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Etiam elit Zuris non tempor quam, et lacinia
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Mauris accumsan eros eget libero posuere vulputate
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Pellentesque orci lectus, consectetur vel posuere posuere
                        </li>
                    </ul>
                    <span className='font-medium-16-blue'>
                        Learn More
                    </span>
                </div>
                <div className='width-40 text-right'>
                    <img src={spaPixel}/>
                </div>
            </div>
            <div className='flex-row mg-80'>
                <div className='width-40 text-left'>
                    <img src={retailPixel}/>
                </div>
                <div className='width-60'>
                    <label className='font-medium-24-dark-weighted mg-bot-18'>
                        Retail Business
                    </label>
                    <p className='font-medium-16-dark'>
                        Retail Industry is changing constantly and there are new challenges to by faced
                        everyday. Buying, Selling, transfer etc. are some of the toughest operation when
                        managing retail business. With queuebuster you can manage inventory, handle
                        reports and analytics. We will always keep you in control and help your staff
                        stay efficient.
                    </p>
                    <ul style={ulStyle}>
                        <li className='font-medium-16-light mg-bot-8'>
                            It was a humorously perilous business for both of us
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Etiam elit Zuris non tempor quam, et lacinia
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Mauris accumsan eros eget libero posuere vulputate
                        </li>
                        <li className='font-medium-16-light mg-bot-8'>
                            Pellentesque orci lectus, consectetur vel posuere posuere
                        </li>
                    </ul>
                    <span className='font-medium-16-blue'>
                        Learn More
                    </span>
                </div>
            </div>

        </div>
    )
}

const ulStyle = {
    listStyleImage: `url(${check})`,
    padding: '20px'
}
