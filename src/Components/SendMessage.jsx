import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, {useState} from 'react'
import { auth, db } from '../firebase'

const  style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 bg-opacity-80 text-white outline-none border-none`,
    button: `w-[20%] bg-blue-500`
}

const SendMessage = () => {
const [userMessage, setUserMessage] = useState ('');

const sendMessage = async (e) => {
    e.preventDefault()

    if (userMessage === '') {
      return
    }

    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'firebase-chat'), {
        text: userMessage,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setUserMessage('')

}

  return (
    <form onSubmit={sendMessage} className={style.form}>
        <input value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        className={style.input} 
        type="text" placeholder='Type something' />
        <button className={style.button} type="submit">Send</button>
    </form>
   
  )
}

export default SendMessage