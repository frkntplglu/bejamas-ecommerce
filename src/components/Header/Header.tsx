import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Cart from '../Cart'

function Header() {
  return (
    <header className={styles.header}>
        <Image src="/images/logo.svg" alt="Bejamas" width="155" height="25" />
        <Cart />
    </header>
  )
}

export default Header