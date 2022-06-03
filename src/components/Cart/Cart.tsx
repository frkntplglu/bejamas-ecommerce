import Image from 'next/image'
import React from 'react'
import styles from "./Cart.module.css"

function Cart() {
  return (
    <div className={styles.cart}>
        <Image src="/images/cart.svg" width="54" height="54" alt="Your Cart" />
    </div>
  )
}

export default Cart