import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and Display them 
const blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        console.log("useEffect is running");
        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();
        })
            .then((parsed) => {
                console.log(parsed)
                setBlogs(parsed)
            })
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blogItem) => {
                    return <div key={blogItem.title} >
                        <Link href={'/blogpost/learn-javascript'}>
                            <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
                        <p>JavaScript is the language used to design logic for the web</p>
                    </div>
                })}
            </main>
        </div>
    )
}

export default blog
