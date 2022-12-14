import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, {useState} from 'react'
import { auth, db } from '../firebase'

const  style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 `,
    input: `w-full text-xl p-3 bg-gray-900 bg-opacity-80 text-white outline-none border-none`,
    button: `w-[20%] bg-indigo-400`
}



const SendMessage = ({scroll}) => {
const [userMessage, setUserMessage] = useState ('');

const sendMessage = async (e) => {
    e.preventDefault()
    //if there is no message typed into form - then return without doing anything//
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
    setUserMessage(''); 

    scroll.current.scrollIntoView({behavior: 'smooth'})

}

  return (
    <form onSubmit={sendMessage} className={style.form}>
        <input value={userMessage} autoFocus
        onChange={(e) => setUserMessage(e.target.value)}
        className={style.input} 
        type="text" placeholder='Type something' />
        <button className={style.button} type="submit">Send</button>
    </form>
   
  )
}

export default SendMessage
