import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import styles from "./ProductList.module.css"

const ProductList = ({products}: any) => {
  
  return (
    <section className={styles.productList}>
        {
            products?.map((item: any) => (
                <ProductCard 
                key={item.name}
        name={item.name}
        category={item.category}
        price={item.price}
        currency={item.currency}
        image={{
          src: item.image.src ?? item.image,
          alt:  item.name
        }}
        bestseller={item.bestseller}
        featured={item.featured}
        details={item.detail}
      />
            ))
        }
    </section>
  )
}

export default ProductList