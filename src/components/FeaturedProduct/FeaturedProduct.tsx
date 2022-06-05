import React from 'react'
import Image from 'next/image'
import styles from "./FeaturedProduct.module.css"

const FeaturedProduct = () => {
  return (
    <section className={styles.featuredProduct}>
        <div className={styles.featuredProductHeader}>
            <h1 className={styles.featuredProductTitle}>Samurai King Resting</h1>
            <button className={styles.featuredProductAddToCart}>ADD TO CART</button>
        </div>
        <figure className={styles.featuredProductImage}>
            <Image src="/images/featured.jpg" alt="Samurai King Resting" layout="responsive" width={1290} height={553} />
            <div className={styles.featuredProductImageBadge}>Photo of the day</div>
        </figure>
        <div className={styles.featuredProductContent}>
            <article className={styles.featuredProductDescription}>
                <div className={styles.featuredProductContentTitle}>About the Samurai King Resting</div>
                <div className={styles.featuredProductContentTitleSecondary}>Pets</div>
                <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder </p>
                <p>text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
            </article>
            <div className={styles.featuredProductDetails}>
                <div className={styles.featuredProductContentTitle}>People also buy</div>
                <ul className={styles.featuredProductRecommended}>
                    <li><Image src="/images/recommend1.jpg" alt="recommend1" layout="fill" width={117} height={147} /></li>
                    <li><Image src="/images/recommend2.jpg" alt="recommend1" layout="fill" width={117} height={147} /></li>
                    <li><Image src="/images/recommend3.jpg" alt="recommend1" layout="fill" width={117} height={147} /></li>
                </ul>
                <div className={styles.featuredProductContentTitle}>People also buy</div>
                <ul className={styles.featuredProductExifInfo}>
                    <li>Size: 1020 x 1020 pixel</li>
                    <li>Size: 15 mb</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default FeaturedProduct