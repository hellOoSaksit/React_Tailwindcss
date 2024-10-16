import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdPulse, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const {removeFromCart ,increaseAmount , decreaseAmount} = useContext(CartContext);
  //destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-bold ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* imgage */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-small max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 translate-x-0" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36xp] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icons */}
              <div onClick={() => decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">{amount}</div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
              <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div>{price} ฿</div>
            {/* final price */}
            {/* ทฟาำ ะ้ำ ยพรแำ ฟะ / กำแรทสห */}
            <div className="flex-1 flex justify-en items-center text-primary">{`${parseFloat(price * amount).toFixed(2)} ฿ `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
