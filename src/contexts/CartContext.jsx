
import React, { createContext, useState, useEffect } from "react";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../config/firebaseConfig";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // Firestore instance
  const db = getFirestore();
  const userId = auth.currentUser ? auth.currentUser.uid : null;

  // Fetch cart data from Firestore on initial render
  useEffect(() => {
    const fetchCart = async () => {
      if (userId) {
        const cartDocRef = doc(db, "users", userId, "cart", "items");
        const cartDoc = await getDoc(cartDocRef);
        if (cartDoc.exists()) {
          setCart(cartDoc.data().cart || []);
        }
      }
    };
    fetchCart();
  }, [userId, db]);

  // Save all cart data to Firestore whenever it changes
  useEffect(() => {
    const saveCart = async () => {
      if (userId) {
        const cartDocRef = doc(db, "users", userId, "cart", "items");
        await setDoc(cartDocRef, { cart });
      }
    };
    saveCart();
  }, [cart, userId, db]);

  // Calculate total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  // Update item amount
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, id, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      setCart(newCart);
    }
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        }
        return item;
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
