import React from 'react'

const style = {
    message:`flex items-center shadow-xl m-4 py-2 px-3 rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent:`bg-blue text-white flex-row-reverse text-end float-right rounded-br-full`,
    received:`bg-yellow text-black float-left rounded-br-full`,
}

const Message = ({message}) => {
  return (
    <div>
        <div className={style.message}>
            <p className={style.name}>{message.name}</p>
            <p>{message.text}</p>

        </div>
    </div>
  )
}

export default Message