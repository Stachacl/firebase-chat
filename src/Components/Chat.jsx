import { onSnapshot } from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "firebase-chat"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      }); 
    });
  }, []);

  return (
    <>
      <main className={style.main}>
        <Message />
      </main>
      {/* Send message component -form */}
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
