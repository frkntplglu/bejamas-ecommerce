import React from 'react'
import IIconProps from "./icontype"

const NextArrow = (props: IIconProps) => {
    const {stroke} = props;
  return (
    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L10 10L2 18" stroke={stroke || "#000"} strokeWidth="3"/>
    </svg>

  )
}

export default NextArrow