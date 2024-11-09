import React from 'react'

const RestaurentLogin = () => {
  return (
    <div className='container'>
        <div className='form_div'>
            <h2>Login Page</h2>
            <div className='button_wrapper'><input type='text'  className="input_field" placeholder='User Name'/></div>
            <div className='button_wrapper'><input type='password' className="input_field"  placeholder='Enter Password'/></div>
            <div className='button_wrapper'>
                <button className='button'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default RestaurentLogin