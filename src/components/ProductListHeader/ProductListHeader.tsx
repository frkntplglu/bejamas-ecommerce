import Image from 'next/image'
import React from 'react'
import PageTitle from '../PageTitle'
import styles from "./ProductListHeader.module.css"

const ProductListHeader = (props: any) => {
  const {filterMobileButton: {isFilterModalOpen, setIsFilterModalOpen}} = props;
  return (
    <section className={styles.productListHeader}>
      <PageTitle mainTitle="Photography" subTitle='Premium Photos' />
      <button onClick={() => setIsFilterModalOpen(!isFilterModalOpen)} className={styles.filterMobileButton}><Image src="/images/filter.svg" width="29" height="29" alt="Filter" /></button>
    </section>
  )
}

export default ProductListHeader