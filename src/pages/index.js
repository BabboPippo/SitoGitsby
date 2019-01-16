import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Benvenuti in Gatsby</h3>
    <ButtonWrapper>Read me</ButtonWrapper>
  </Layout>
)

const ButtonWrapper = styled.button`
background: blue;
color: white;
`

export default IndexPage
