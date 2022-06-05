import React from 'react'
import Header from '../Header'
import styles from"./Layout.module.css"

interface ILayoutProps {
    children: any
}

const Layout = (props: ILayoutProps) => {
    const {children} = props;
  return (
      <>
      <Header />
      <main className={styles.layout}>
        
        {children}
    </main>
      </>
    
  )
}

export default Layout