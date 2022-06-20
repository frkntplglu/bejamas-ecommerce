import React, { useContext } from 'react'
import Image from 'next/image'
import styles from "./FeaturedProduct.module.css"
import { notifyCart, warnCart } from '../../utils/cartNotifications'
import CartContext from '../../context/cartContext'

const FeaturedProduct = (props: any) => {
    const {productData} = props
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
    if(!productData) return null
  return (
    <section className={styles.featuredProduct}>
        <div className={styles.featuredProductHeader}>
            <h1 className={styles.featuredProductTitle}>{productData.name}</h1>
            <button className={styles.featuredProductAddToCart} onClick={() => addToCart({name: productData.name, price: productData.price, image: productData.image})}>ADD TO CART</button>
        </div>
        <figure className={styles.featuredProductImage}>
            <Image src={productData.image.src} alt={productData.image.alt} layout="responsive" width={1290} height={553} />
            <div className={styles.featuredProductImageBadge}>Photo of the day</div>
        </figure>
        <div className={styles.featuredProductContent}>
            <article className={styles.featuredProductDescription}>
                <div className={styles.featuredProductContentTitle}>About the {productData.name}</div>
                <div className={styles.featuredProductContentTitleSecondary}>{productData.category}</div>
                
                <p>{productData.details.description}</p>
            </article>
            <div className={styles.featuredProductDetails}>
                <div className={styles.featuredProductContentTitle}>People also buy</div>
                <ul className={styles.featuredProductRecommended}>
                    {productData.details.recommendations.map((item: any) => {
                        return (<li key={item.src}><Image src={item.src} alt="recommend1" width={117} height={147} /></li>)
                    })}
                </ul>
                <div className={styles.featuredProductContentTitle}>People also buy</div>
                <ul className={styles.featuredProductExifInfo}>
                    <li>Size: {productData.details.dimmentions.width} x {productData.details.dimmentions.height} pixel</li>
                    <li>Size: {productData.details.size / 1000} mb</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProduct