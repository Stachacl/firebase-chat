import React from "react";


const style = {
nav: `text-purple-600`,
heading: `text-purple-600 text-lg text-black font-semibold`
}

const Navbar = () => {
  return (
    <div className={style.nav}>
      <h1 className="red">Navbar</h1>
    </div>
  );
};

export default Navbar;
