import React from 'react'
import { auth } from '../firebase'

const style = {
    button: "inline-flex  shadow items-center justify-center border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
}


const LogOut = () => {
  return (
    <div className={style.button}>LogOut</div>
  )
}

export default LogOut