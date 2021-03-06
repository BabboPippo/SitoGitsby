import React from 'react'
import { FaBeer } from 'react-icons/fa';
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Benvenuti in Gatsby!</h3>
  </Layout>
)


export default IndexPage
