"use client"
import React, { useState } from 'react'
import RestaurentLogin from '../_cpmponents/RestaurentLogin'
import RestaurantSignup from '../_cpmponents/RestaurantSignup'
import RestaurantHeader from '../_cpmponents/RestaurantHeader'
import './Styles.css'
import RestaurantFooter from '../_cpmponents/RestaurantFooter'

const Restaurant = () => {
    const [login,setLogin] = useState(true)
    console.log("Login",login);
  return (
    <div className='container'>
        <RestaurantHeader/>
        {/* <h1>Restaurant Login and Signup Page</h1> */}
        {
          login ? <RestaurentLogin/> : <RestaurantSignup/>
        }
        <button className='button_link' onClick={()=>setLogin(!login)}>{login ? "Do not have account ? Signup":"Already have an account ? Login"}</button>

        <RestaurantFooter/>
    </div>
  )
}

export default Restaurant