import React from "react";
import Button from "./Button";
const images= require("../Assets/images.png")
type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-wrap sm:flex-row gap-5 items-center justify-between drop-shadow-md bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white">
      <img
        className="w-[70px] drop-shadow-sm cursor-pointer"
        src={images}
        alt="Logo"
      />
      <div className="flex">
        <Button text="Add New ListBoard" secondary/>
      </div>
    </div>
  );
}

export default Header;
