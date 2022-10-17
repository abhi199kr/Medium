import React from 'react'
import "./D5.css"

const D5 = () => {
  return (
    <>
    <div className='d-flex flex-md-row flex-column border-top border-bottom border-dark'>
      <div className='col-md-6 col-sm-12'>
      <h2 className='p-5  display-2'>
      Learn more about us. Or join us.
      </h2>

      </div>
      {/* 2nd div */}
      <div className='col-md-6 col-sm-12  bo'>
      <div className='p-5'>
      <h2>The Medium blog</h2>
      
      <p>Visit our company blog for the latest news, product updates, and tips and tricks.
      </p>

      <p className='text-center px-5 display-3  bold btn-outline-success btn  border border-success rounded-pill p-2'>Read ob blog</p>
      </div>
         {/* 2nd 2nd div */}
      <div className='border-top border-dark p-5'>
      <h2>Work at Medium.</h2>
    <p>Our team is home to engineers, journalists, artists, and creatives of all stripes.
    </p>
    <p className='text-center px-5 display-3  bold btn-outline-success btn  border border-success rounded-pill p-2'>View Open Positions</p>



      </div>

      

      </div>

    
     
    </div>
    <div className='d-flex flex-md-row flex-column border-bottom border-dark'>
    <div className='col-md-6 col-sm-12 p-5'>
    <img src="https://cdn-static-1.medium.com/sites/medium.com/about/images/creator-find-points-iphones.png
    " alt="" />

    </div>
    <div className='col-md-6 col-sm-12 bo p-5'>
    <h2 className='display-2'>Read, write, and expand your world.</h2>

    <p className='text-center px-5 display-3  bold btn-outline-success btn btn-success text-light border border-success rounded-pill '>Get Started</p>


    


    </div>

    </div>
    {/* Footer Sections */}
    <h2 className='text-center p-5'>Medium</h2>

    </>
  )
}

export default D5
