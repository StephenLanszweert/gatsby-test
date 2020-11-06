import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blogpage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui facere
          ratione sunt odit? Id beatae porro voluptatum mollitia magni iusto
          amet explicabo, reiciendis voluptate hic!
        </p>
      </div>
    </Layout>
  )
}

export default blog
