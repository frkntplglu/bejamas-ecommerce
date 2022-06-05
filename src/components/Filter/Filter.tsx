import React from 'react'
import styles from "./Filter.module.css"

interface IFilterProps {
    title: string;
    options: {id: number; title: string; key: string}[]
}

const Filter = (props: IFilterProps) => {
    const { title, options } = props;
  return (
    <div className={styles.filter}>
        <div className={styles.filterTitle}>{title}</div>
        <ul className={styles.filterList}>
            {
                options.map((item: any) => {
                    return (<li key={item.id}>
                        <input type="checkbox" id={item.key} />
                        <label htmlFor={item.key}>{item.title}</label>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}

export default Filter