import React from 'react'
import styles from "./FilterContainer.module.css"

interface IFilterContainerProps {
    children: any; // TO DO
}

const FilterContainer = (props: IFilterContainerProps) => {
    const { children } = props;
  return (
    <aside className={styles.filterContainer}>
      {children}
    </aside>
  )
}

export default FilterContainer