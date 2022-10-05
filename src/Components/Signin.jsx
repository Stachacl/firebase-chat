import React from 'react'
import GoogleButton from 'react-google-button'

const style = {
    wrapper: `bg-gray-800`
    }

const Signin = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton />
      </div>
  )
}

export default Signin