import React, { Component } from 'react'

import logo from "../../assets/images/logo.png";

 class Header extends Component {
  
  render() {
    return (
      <div className="header fixed-header flex-row-center" >
        <div className="container flex-row-center" style={{justifyContent:"space-between"}}>
        <div>
          <img src={logo} className="header-logo" />
        </div>
        <div  className="header-right">
          <ul className='font-medium-14-dark flex-row-center'>
            <li className='flex-row-center' style={liStyle}>
              Business type
            </li>
            <li className='flex-row-center' style={liStyle}>
              Pricing
            </li>
            <li className='flex-row-center' style={liStyle}>
              Help
            </li>
            <li className='flex-row-center' style={liStyle}>
              Demo
            </li>
            <li className='flex-row-center' style={liStyle}>
              Login
            </li>
            <li className='flex-row-center' style={liStyle}>
              <span className='font-medium-14-blue'>
                +919876543210
              </span>
            </li>
            <li className='flex-row-center' style={liStyle}>
              <button style={btnStyle}>
                Try for free
              </button>
            </li>
          </ul>
        </div>
        </div>
      </div>
    )
  }
}

const btnStyle={
  width: '111px',
  height: '30px',
  borderRadius: '15px',
  border: 'solid 1px #212b36',
}


const liStyle={
    marginLeft: '20px',
    height: '30px',
}


export default  Header;
