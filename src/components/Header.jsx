
import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = ({ setIsLoggedIn }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="bg-white py-2 shadow-md fixed w-full z-10 transition-all">
      <div className="container mx-auto flex items-center justify-between h-full px-4 sm:px-6 lg:px-10">
        <Link to={"/"}>
          <div>
            <img className="w-[130px]" src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex items-center relative"
          >
            <BsBag className="text-3xl" />
            <div className="bg-red-500 absolute -right-2 bottom-3 text-[15px] w-[20px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
