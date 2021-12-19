/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import PropTypes from "prop-types"
import {useStaticQuery,graphql, Link} from "gatsby"
import LandingHeader from "./landingHeader"
import Footer from "./footer"
import "./layout.css"
import ScrollToTop from "./scrolltop"

const LandingLayout=({children}) => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="site">
      <LandingHeader siteTitle={data.site.siteMetadata?.title||`Title`} />
        <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

LandingLayout.propTypes={
  children: PropTypes.node.isRequired,
}

export default LandingLayout
