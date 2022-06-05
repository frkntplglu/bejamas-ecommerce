import React, { SyntheticEvent, useState } from 'react'
import styles from "./Filter.module.css"

interface IFilterProps {
    title: string;
    options: {id: number; title: string; key: string}[]
}

const Filter = (props: IFilterProps) => {
    const { title, options } = props;
    const [selectedFilters, setSelectedFilters] = useState<any[]>([]);

    const handleSelectFilter = (e: any) => {
        let updatedList = [...selectedFilters]
        let changedElement = options.filter(item => item.title === e?.target.value);
        if(e.target.checked) {
            updatedList = [...selectedFilters, ...changedElement]
        } else {
            updatedList.splice(selectedFilters.indexOf(e.target.value), 1);
        }
        setSelectedFilters(updatedList)
    }

  return (
    <div className={styles.filter}>
        <div className={styles.filterTitle}>{title}</div>
        <ul className={styles.filterList}>
            {
                options.map((item: any) => {
                    return (<li key={item.id}>
                        <input type="checkbox" value={item.title} onChange={(e) => handleSelectFilter(e)} id={item.key} />
                        <label htmlFor={item.key}>{item.title}</label>
                    </li>)
                })
            }
        </ul>
    </div>
  )
}

export default Filter