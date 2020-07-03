import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <Link to="/todos/">Go to TODOs</Link> <br />
  </Layout>
)

export default IndexPage
