/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import PropTypes from "prop-types"
import {useStaticQuery,graphql} from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import ScrollToTop from "./scrolltop"
import { ParallaxProvider } from 'react-scroll-parallax';

const Layout=({children}) => {
  const data=useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="site">
      <ParallaxProvider>
      <Header siteTitle={data.site.siteMetadata?.title||`Title`} />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      </ParallaxProvider>
    </div>
  )
}

Layout.propTypes={
  children: PropTypes.node.isRequired,
}

export default Layout
