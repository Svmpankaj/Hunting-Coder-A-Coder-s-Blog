import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const slug = (props) => {
    const [blog, setBlog] = useState(props.myBlogs);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                <div> {blog && blog.content}
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true // false or 'blocking'
    };
}



export async function getStaticProps(context) {
    console.log(context)
    const { slug } = context.params;

    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlogs = await data.json()


    return {
        props: { myBlogs }, // will be passed to the page component as props
    }
}

export default slug
