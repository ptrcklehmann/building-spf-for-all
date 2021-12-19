import * as React from "react"

import {graphql,useStaticQuery} from 'gatsby'
import {getImage, GatsbyImage} from 'gatsby-plugin-image'
import {BgImage, convertToBgImage} from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import "./header.css"

export default function BackgroundSection({className}) {
    const {backgroudImg} = useStaticQuery(
        graphql`
        query {
            backgroudImg: file(relativePath: {eq: "slide.jpg"}) {
              id
              childImageSharp {
                gatsbyImageData(
                width: 2000,
                quality: 50,
                webpOptions: {quality: 70}
                )
              }
            }
          }`
    )
    const image = getImage(backgroudImg)
    const bgImage = convertToBgImage(image)
    return (
        <BackgroundImage Tag="div" className={className}
        {...bgImage} preserveStackingContext >
        </BackgroundImage>
    )
}