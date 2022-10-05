import React from "react";
import Navbar from "./Components/Navbar";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />

        <div>
         <img src="https://ik.imagekit.io/stcl/chat/firebase-hero_cjRPVlwHZ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664943643081" alt="React Logo" />
      </div>

      
      </section>

      

    </div>
  );
}

export default App;
