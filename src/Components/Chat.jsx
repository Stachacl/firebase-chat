import React from "react";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  return (
    <>
      <main className={style.main}>
        {/* Chat message component */}
        </main>
         {/* Send message component -form */}
         <span ref={scroll}></span>
    </>
  );
};

export default Chat;
