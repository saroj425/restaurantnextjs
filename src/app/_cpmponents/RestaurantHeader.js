import Link from 'next/link'
import React from 'react'

const RestaurantHeader = () => {
  return (
    <div className='header_wrapper'>
        <div className='logo'>
            {/* <img src="#" alt="logo" /> */}
            <h2>J.K Food Delivery</h2>
        </div>
        <ul>
            <li><Link href="">Home</Link></li>
            <li><Link href="">Login/Signup</Link></li>
            <li><Link href="">Profile</Link></li>
        </ul>
    </div>
  )
}

export default RestaurantHeader