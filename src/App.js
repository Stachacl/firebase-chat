import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        <Chat />
 
        <div>
          <img src="https://ik.imagekit.io/stcl/chat/firebase-hero_cjRPVlwHZ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664943643081"
            alt="React Logo"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
