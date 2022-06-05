import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Cart.module.css"

function Cart() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  return (
    <div className={styles.cart}>
        <button onClick={() => setCartOpen(!cartOpen)} className={styles.cartButton}><Image src="/images/cart.svg" width="54" height="54" alt="Your Cart" /></button>
        {
          cartOpen ? "Cart open" : null
        }
    </div>
  )
}

export default Cart