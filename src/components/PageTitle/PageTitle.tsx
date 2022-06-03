import React from 'react'
import styles from "./PageTitle.module.css"

interface IPageTitleProps {
  mainTitle: string;
  subTitle: string;
}

const PageTitle = (props: IPageTitleProps) => {
  const { mainTitle, subTitle } = props;
  return (
    <h1 className={styles.pageTitle}>{mainTitle} / <span>{subTitle}</span></h1>
  )
}

export default PageTitle