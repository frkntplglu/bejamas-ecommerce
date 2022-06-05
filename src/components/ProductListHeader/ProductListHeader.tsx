import React from 'react'
import PageTitle from '../PageTitle'
import styles from "./ProductListHeader.module.css"

const ProductListHeader = () => {
  return (
    <div className={styles.productListHeader}>
      <PageTitle mainTitle="Photography" subTitle='Premium Photos' />
    </div>
  )
}

export default ProductListHeader