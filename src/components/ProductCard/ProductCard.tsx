import Image from 'next/image'
import React, { useContext } from 'react'
import CartContext from '../../context/cartContext';
import { notifyCart, warnCart } from '../../utils/cartNotifications';
import styles from "./ProductCard.module.css"

interface IProductCardProps {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {src: string, alt: string};
  bestseller: boolean;
  featured: boolean;
  details: any
}


const ProductCard = (props: IProductCardProps) => {
  const { name, category, price, currency, image, bestseller, featured, details } = props;
  const {cart, setCart, setCartOpen} = useContext(CartContext);
  const addToCart = ({name, price, image}: any) => {
    const currentCart = [...cart];
    if(!currentCart.some((item: any) => item.name === name)) {
      currentCart.push({name, price, image})
      setCart(currentCart);
      setCartOpen(true);
      notifyCart();
    } else {
      warnCart();
    }
    
  }

  return (
    <div className={styles.productCard}>
        <figure className={styles.productCard_image}>
          <Image src={image.src} alt={image.alt} width="282" height="390" layout="responsive" />
          {
            bestseller ? <div className={styles.productCard_bestSeller}>BESTSELLER</div> : null
          }
          <button onClick={() => addToCart({name, price, image})} className={styles.productCard_addToCart}>ADD TO CART</button>
        </figure>
        <div className={styles.productCard_category}>{category}</div>
        <h1 className={styles.productCard_name}>{name}</h1>
        <div className={styles.productCard_price}>{currency === "USD" ? "$" : "€"} {price} </div>
    </div>
  )
}

export default ProductCard