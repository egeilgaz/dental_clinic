import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'

function aboutUs() {
  return (
    <>
      <Header />
      <div>aboutUs</div>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default aboutUs