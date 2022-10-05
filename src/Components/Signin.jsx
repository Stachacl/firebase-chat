import React from 'react'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../firebase'

const style = {
    wrapper: `flex justify-center hover:bg-indigo-700`
    }

const googleSignin = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}    

const Signin = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignin}/>
      </div>
  )
}

export default Signin