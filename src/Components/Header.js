import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='p-3 border-bottom border-dark   d-flex flex-md-row  flex-column'>
    <div className='flex-grow-1 '>
        {/* <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/Medium-Logo-Black-RGB-1.svg" alt="" /> */}
        <h2>Medium</h2>
    </div>
    <div className='d-flex justify-content-end gap-md-4 gap-1 align-items-end'>
    <p className='ud'>our story</p>
    <p className='ud'>Membership</p>
    <p className='ud'>Write</p>
    <p className='ud' >Sign in</p>
    <p className='btn btn-dark rounded-pill get '>Get Started</p>


    </div>
      
    </div>
  )
}

export default Header
