import React, { SyntheticEvent, useState } from 'react'
import styles from "./Filter.module.css"

interface IFilterProps {
    title: string;
    options: {id: number; title: string; key: number | string}[];
    onChange?: any;
    multiple?: boolean;
    name: string;
    checkedOnes?: any;
}

const Filter = (props: IFilterProps) => {
    const { title, options, onChange, multiple, name, checkedOnes } = props;
    
  return (
    <div className={styles.filter}>
        <div className={styles.filterTitle}>{title}</div>
        <ul className={styles.filterList}>
            {
                options.map((item: any, index: any) => {
                    
                    return (<li key={item.id}>
                        <input type={multiple ? "checkbox" : "radio"} checked={checkedOnes && checkedOnes.includes(item.key)} name={name} value={item.key} onChange={(e) => onChange(e)} id={item.key} />
                        <label htmlFor={item.key}>{item.title}</label>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}

export default Filter