import type { NextPage } from 'next'
import Head from 'next/head'
import ProductCard from '../src/components/ProductCard'
import ProductListHeader from '../src/components/ProductListHeader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductListHeader />
      <ProductCard 
        name="Red Bench"
        category="people"
        price={3.89}
        currency="USD"
        image={{
          src: "",
          alt: "Red Bench"
        }}
        bestseller
        featured={false}
        details={null}
      />
    </div>
  )
}

export default Home
