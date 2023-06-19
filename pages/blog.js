import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';


// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through them and Display them 
const Blog = (props) => {
    console.log(props)
    const [blogs, setBlogs] = useState(props.allBlogs);

    const fetchData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>


                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {blogs.map((blogitem) => {
                        return <div key={blogitem.slug} >
                            <Link href={`/blogpost/${blogitem.slug}`}>
                                <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
                            <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
                            <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read more</button></Link>
                        </div>
                    })}
                </InfiniteScroll>



            </main>
        </div>
    )
};



export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = []
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }


    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog;
