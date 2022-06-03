import Image from 'next/image'
import React from 'react'
import styles from "./ProductCard.module.css"

interface IProductCardProps {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {src: string, alt: string} | string;
  bestseller: boolean;
  featured: boolean;
  details: any
}

const ProductCard = (props: IProductCardProps) => {
  const { name, category, price, currency, image, bestseller, featured, details } = props;
  return (
    <div className={styles.productCard}>
        <figure className={styles.productCard_image}>
          <Image src="/images/product2.jpg" alt="Product" width="282" height="390" layout="responsive" />
          {
            bestseller ? <div className={styles.productCard_bestSeller}>BESTSELLER</div> : null
          }
          <button className={styles.productCard_addToCart}>ADD TO CART</button>
        </figure>
        <div className={styles.productCard_category}>{category}</div>
        <h1 className={styles.productCard_name}>{name}</h1>
        <div className={styles.productCard_price}>{price}</div>
    </div>
  )
}

export default ProductCard