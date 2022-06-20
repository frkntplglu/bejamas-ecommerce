import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import CartContext from '../../context/cartContext';
import styles from "./Cart.module.css"

const notifyCart = () => toast.success("Cart has been cleared!!", {
  position: "bottom-right",
  autoClose: 1000,
});

function Cart() {
  const {cart, setCart, cartOpen, setCartOpen} = useContext(CartContext);

  const handleClear = () => {
    setCart([]);
    setCartOpen(false);
    notifyCart()
  }
  return (
    <div className={styles.cart}>
        <button onClick={() => setCartOpen(!cartOpen)} className={styles.cartButton}>
        <Image src="/images/cart.svg" width="54" height="54" alt="Your Cart" />
        {
          cart.length > 0 ? <span className={styles.cartBadge}>{cart.length}</span> : null
        }
        </button>
        {
          cartOpen ? 
          <>
          <div className={styles.cartItems}>
            {cart.length === 0 ? <div className={styles.emptyCart}>There is no product in your cart!</div> : null}
            <ul>
            {
              cart?.map((item: any) => {
                return (<li key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>
                  <Image src={item.image.src} alt={item.image.alt} width="149" height="86" layout="fixed" />
                </li>)
              })
            }
            </ul>
            {
              cart.length > 0 ? <button onClick={handleClear}>CLEAR</button> : null
            }
          </div>
          
          </>
          : null
        }
        
    </div>
  )
}

export default Cart