import React from 'react'
import NextArrow from '../Icons/NextArrow'
import PrevArrow from '../Icons/PrevArrow'
import styles from "./Pagination.module.css"

interface IPaginationProps {
    pageNumber: number;
    activePage: number;
}

const Pagination = (props: IPaginationProps) => {
    const {pageNumber, activePage} = props;
  return (
    <div className={styles.pagination}>
        <button><PrevArrow /></button>
        {Array.from(Array(pageNumber).keys()).map((page: any) => {
            return <button key={page}>{page}</button>
        })}
        <button><NextArrow /></button>
    </div>
  )
}

export default Pagination