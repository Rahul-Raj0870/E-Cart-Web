import React from 'react'

const Footer = () => {
  return (
  <div className='mt-16'>
    <div className='flex bg-violet-600 text-white justify-evenly p-5'>
      <div >
        <h3 className='py-2 text-2xl'><span><i className="fa-solid fa-truck-fast"></i></span> E Cart</h3>
        <p>Designed and built with all the love in the world by <br /> the Bootstrap team with the help of our <br /> contributors.</p>
        <p className='py-2'>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.3.</p>
      </div>
      <div>
        <ul>
          <li className='font-bold text-2xl py-2'>Links</li>
          <li>Landing Page</li>
          <li>Home Page</li>
          <li>Watch History Page</li>
        </ul>
      </div>
      <div>
      <ul>
          <li className='font-bold text-2xl py-2'>Guides</li>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>React Router</li>
        </ul>
      </div>
      <div>
        <h3 className='text-2xl font-bold py-2'>Contact us</h3>
        <input className='rounded p-2' type="text" placeholder='Enter your Email here' /><span><i className="fa-solid fa-arrow-right ms-2 text-xl"></i></span>
        <div className='flex justify-between mt-5 text-xl'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-solid fa-phone"></i>

        </div>
      </div>
    </div>
    <div className='bg-violet-600 text-white text-center py-3'><p>Copyright <i class="fa-regular fa-copyright"></i> Daily Cart,All rights reserved</p></div>
  </div>
  )
}

export default Footer