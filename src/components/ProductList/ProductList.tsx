import React from 'react'
import ProductCard from '../ProductCard'
import styles from "./ProductList.module.css"

const ProductList = () => {
  return (
    <div className={styles.productList}>
        {
            Array(6).fill(0).map(item => (
                <ProductCard 
                key="xd"
        name="Red Bench"
        category="people"
        price={3.89}
        currency="USD"
        image={{
          src: "",
          alt: "Red Bench"
        }}
        bestseller
        featured={false}
        details={null}
      />
            ))
        }
    </div>
  )
}

export default ProductList