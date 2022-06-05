import React from 'react'
import PageTitle from '../PageTitle'
import styles from "./ProductListHeader.module.css"

const ProductListHeader = () => {
  return (
    <section className={styles.productListHeader}>
      <PageTitle mainTitle="Photography" subTitle='Premium Photos' />
    </section>
  )
}

export default ProductListHeader