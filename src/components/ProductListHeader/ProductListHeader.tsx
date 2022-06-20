import Image from 'next/image'
import React from 'react'
import PageTitle from '../PageTitle'
import styles from "./ProductListHeader.module.css"

const ProductListHeader = (props: any) => {
  const {filterMobileButton: {isFilterModalOpen, setIsFilterModalOpen}} = props;
  const {sortingType: {sortingType, setSortingType}} = props;
  const {sortingAlignment: {sortingAlignment, setSortingAlignment}} = props;
  
  const handleSortingType = (e:any) => {
    setSortingType(e.target.value)
  }

  const handleSortingAlignment = () => {
    if(sortingAlignment === "asc") {
      setSortingAlignment("desc");
    } else {
      setSortingAlignment("asc");
    }
  }

  return (
    <section className={styles.productListHeader}>
      <PageTitle mainTitle="Photography" subTitle='Premium Photos' />
      <div className={styles.sortingWrapper}>
        <button onClick={handleSortingAlignment} className={styles.sortingBtn}><Image src="/images/sort.svg" alt="Bejamas" width="15" height="15" /></button>
        Sort By
        <select className={styles.sortingSelect} value={sortingType} onChange={(e) => handleSortingType(e)}>
          <option value="price">Price</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
      <button onClick={() => setIsFilterModalOpen(!isFilterModalOpen)} className={styles.filterMobileButton}><Image src="/images/filter.svg" width="29" height="29" alt="Filter" /></button>
    </section>
  )
}

export default ProductListHeader