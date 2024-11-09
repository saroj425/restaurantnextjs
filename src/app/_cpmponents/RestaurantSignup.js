import React from 'react'

const RestaurantSignup = () => {
  return (
    <div className='container'>
        <div className='form_div'>
            <h2>Signup Page</h2>
            <div className='button_wrapper'><input type='text'  className="input_field" placeholder='User Name'/></div>
            <div className='button_wrapper'><input type='password' className="input_field"  placeholder='Enter Password'/></div>
            <div className='button_wrapper'><input type='password' className="input_field"  placeholder='Enter Confirm Password'/></div>
            <div className='button_wrapper'><input type='text'  className="input_field" placeholder='Enter restaurant name'/></div>
            <div className='button_wrapper'><input type='text'  className="input_field" placeholder='Enter city'/></div>
            <div className='button_wrapper'><input type='text'  className="input_field" placeholder='Enter full address'/></div>
            <div className='button_wrapper'><input type='text'  className="input_field" placeholder='Enter contact number'/></div>
            
            <div className='button_wrapper'>
                <button className='button'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default RestaurantSignup