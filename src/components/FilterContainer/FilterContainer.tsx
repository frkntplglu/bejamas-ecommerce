import React from 'react'

interface IFilterContainerProps {
    children: any; // TO DO
}

const FilterContainer = (props: IFilterContainerProps) => {
    const { children } = props;
  return (
    <div>{children}</div>
  )
}

export default FilterContainer