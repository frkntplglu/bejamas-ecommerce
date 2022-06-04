import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Cart from '../Cart'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <Link href="/"><a><Image src="/images/logo.svg" alt="Bejamas" width="155" height="25" /></a></Link>
        <Cart />
    </header>
  )
}

export default Header