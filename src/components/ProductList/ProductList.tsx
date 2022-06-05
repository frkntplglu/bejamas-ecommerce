import React from 'react'
import Pagination from '../Pagination'
import ProductCard from '../ProductCard'
import styles from "./ProductList.module.css"

const ProductList = () => {
  return (
    <section className={styles.productList}>
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
        <Pagination pageNumber={4} activePage={2} />
    </section>
  )
}

export default ProductList