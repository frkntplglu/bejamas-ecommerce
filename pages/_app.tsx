import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout'
import CartContext from '../src/context/cartContext'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<string[]>([])
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  return <CartContext.Provider value={{cart, setCart, cartOpen, setCartOpen}}><Layout>
    <ToastContainer />
  <Component {...pageProps} />
</Layout></CartContext.Provider>
}

export default MyApp
