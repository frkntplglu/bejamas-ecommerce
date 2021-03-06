import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import FeaturedProduct from '../src/components/FeaturedProduct'
import Filter from '../src/components/Filter'
import FilterContainer from '../src/components/FilterContainer'
import ProductList from '../src/components/ProductList'
import ProductListHeader from '../src/components/ProductListHeader'
import { categoryFilter, priceFilter } from '../src/utils/filter'
import Modal from 'react-modal';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import useWindowSize from '../src/hooks/useWindowSize'

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 9999
  },
  content: {
    margin: 0,
    width: "calc(100% - 72px)",
    left: 0,
    bottom: 0,
    height: "90%",
    border: "none",
    borderRadius: 0,
    padding: "36px"
  }
}

const filterForPrice = (data: any, filterKey: string[]) => {
  return data.filter((item: any) => {
    switch(filterKey[0]) {
      case "lower20":
        return item.price > 0 && item.price < 20;
      case "20to100":
        return item.price > 20 && item.price < 100;
      case "101to200":
        return item.price >= 100 && item.price <= 200;
      case "greater200":
        return item.price > 200;
      default:
        return item;
    }
  })
}

const Home: NextPage = () => {
  const {width} = useWindowSize();
  const [products, setProducts] = useState<any[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [sortingType, setSortingType] = useState<string>("price");
  const [sortingAlignment, setSortingAlignment] = useState<string>("asc");

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const clearFilter = () => {
    setSelectedCategory([])
    setSelectedPrice([])
  }


  useEffect(() => {
    fetch('/api/getProducts')
    .then(response => response.json())
    .then(({data}) => {
      setProducts(data.map((item: any) => item.data))
    })
    .catch(err => {
      console.log(err)
    })
    
  },[])


  const handlePrice = (event: any) => {
    const checkedList = [];
    checkedList.push(event.target.value)
    setSelectedPrice(checkedList);
  }

  const handleCategory = (event: any) => {
    const checkedList = [...selectedCategory];
    if(event.target.checked) {
      checkedList.push(event.target.value)
    } else {
      const targetIndex = selectedCategory.indexOf(event.target.value);
      checkedList.splice(targetIndex, 1); 
    }
    setSelectedCategory(checkedList);
  }

  const getFilteredProducts = () => {
    if (selectedCategory.length) {
      return filterForPrice(products.filter(item => selectedCategory.indexOf(item.category) === -1 ? false : true), selectedPrice);
    }
    return filterForPrice(products, selectedPrice)
  }

  const getSortedProducts = () => {
    if(sortingType === "price") {
      if(sortingAlignment === "asc") {
        return getFilteredProducts().sort((a: any,b: any) => a.price - b.price)
      }
      return getFilteredProducts().sort((a: any,b: any) => b.price - a.price)
    } else if(sortingType === "alphabetical") {
      if(sortingAlignment === "asc") {
        return getFilteredProducts().sort((a: any,b: any) => a.name.localeCompare(b.name))
      }
      return getFilteredProducts().sort((a: any,b: any) => b.name.localeCompare(a.name))
    }
  }

  const featuredProduct = products.filter(item => item.featured)

  return (
    <section className={styles.homepageContainer}>
      <Head>
        <title>Bejamas |??Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedProduct productData={featuredProduct[0]} />
      <ProductListHeader 
        filterMobileButton={{isFilterModalOpen: modalIsOpen, setIsFilterModalOpen: openModal}} 
        sortingType={{sortingType, setSortingType}}
        sortingAlignment={{sortingAlignment, setSortingAlignment}}
      />
      <div className={styles.homepageProductsContainer}>
        {
          width && width > 1024 ? 
          <FilterContainer>
            <Filter title="Category" name="category" onChange={handleCategory} checkedOnes={selectedCategory} options={categoryFilter} multiple />
            <Filter title="Price range" name="price" onChange={handlePrice}  checkedOnes={selectedPrice} options={priceFilter} />
          </FilterContainer>
          : 
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Filter Modal"
            style={modalStyle}
            ariaHideApp={false}
          >
            <button  className={styles.filterModalClose} onClick={closeModal}><Image src="/images/close.svg" width="18" height="18" alt="Close" /></button>
            <div className={styles.filterModalWrapper}>
              <Filter title="Category" name="category" onChange={handleCategory} checkedOnes={selectedCategory} options={categoryFilter} multiple />
              <Filter title="Price range" name="price" onChange={handlePrice} checkedOnes={selectedPrice}  options={priceFilter} />
            </div>
            <div className={styles.filterModalButtons}>
              <button className={styles.clearBtn} onClick={clearFilter}>CLEAR</button>
              <button onClick={closeModal} className={styles.saveBtn}>SAVE</button>
            </div>
          </Modal>
        }

        <ProductList products={getSortedProducts()} />
      </div>
    </section>
  )
}

export default Home
