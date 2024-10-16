import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
const Header = () => {
  const [isActive,setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-2 shadow-md' : 'bg-none py-1'} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex item-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[130px]" src={Logo} alt="" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center relative max-w-[50px]"
        >
          <BsBag className="text-3xl" />
          <div className="bg-red-500 absolute -right-2 bottom-3 text-[15px] w-[20px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
