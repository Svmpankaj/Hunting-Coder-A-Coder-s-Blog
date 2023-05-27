import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const slug = () => {
    const router = useRouter();
    const { slug } = router.query
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <hr />
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis debitis asperiores aliquid dolorem aut aperiam delectus, est culpa excepturi maiores amet molestias.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit in dolorem, quisquam blanditiis voluptatibus eum nulla et voluptates recusandae illo labore magni sint. Sit possimus saepe, libero impedit et expedita omnis quos. Exercitationem fuga officia quibusdam, asperiores ducimus error aut fugit recusandae voluptates, dolor nihil.
                </div>
            </main>
        </div>
    )
}

export default slug
