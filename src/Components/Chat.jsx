import {
  onSnapshot,
  query,
  collection,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] pb-[60px] relative overflow-y-auto`,
};

// if (window.performance) {
//   if (performance == 1) {
//     alert( "This page is  now reloaded");
//     // alert( "This page is reloaded" );
//   } else {
//     alert( "This page was reloaded");

//   }
// }
const Chat = () => {
  const elementToScrollTo = useRef();

  const scrollToBottom = () => {
    elementToScrollTo.current?.scrollIntoView({ behavior: "smooth" })
  }

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  
  useEffect(() => {
    const q = query(collection(db, "firebase-chat"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        <span ref={elementToScrollTo}></span>
      </main>
      <SendMessage scroll={elementToScrollTo} />
    </>
  );
};

export default Chat;
