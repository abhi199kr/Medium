import React from 'react'
import "./D4.css"

const D4 = () => {
  return (
    <div className='bg1g'>
     <div className="container p-5">
      <p className='display-6 text-center font-bold text-light display-2'>Get more with membership..</p>


        <p className='text-center'>Become a Medium member to enjoy unlimited access and directly support the writers you read most.
        </p>
        <div className='text-center'>  
        <p className='text-center px-5 display-3  text-light bold btn-outline-success btn btn-dark border border-light text-outline-dark  px-20  rounded-pill p-2'>See Membership</p>
</div>
      </div>

      {/* 2nd div */}

      <div className='d-flex flex-md-row flex-column border-top border-bottom border-dark'>
      <div className='col-md-6 col-sm-12 p-5'>
    <h2 className=''>Read as much as you want.</h2>
    <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/UnlimitedReading.svg" alt="" />
    <h6>Enjoy unlimited access to every story across all of your devices.</h6>
      </div>
      <div className='b col-md-6 col-sm-12'>
        <div className='p-5'>
        
        <h2>Reward quality content.</h2>
        <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/SupportWriters.svg"
         alt="" />
        <h6 className='pt-5 font-weight-bold'>Your membership helps us pay writers, and keeps your experience ad-free.

        </h6>
        </div>
      </div>

      </div>

      {/* playstore div */}
      <div className='d-flex flex-md-row flex-sm-column bg2'>
      <div className='p-5 col-md-6 col-sm-12'>
      <h2>Take Medium with you.</h2>
      <p>Download our app so you can read wherever you are.</p>

      </div>
      <div className='col-md-6 col-sm-12 p-5 '>
        <img className='img-fluid' src="https://cdn-static-1.medium.com/sites/medium.com/about/images/creator-find-points-iphones.png
        " alt="" />
      </div>

      </div>
      
    </div>
  )
}

export default D4

