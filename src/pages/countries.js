import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSmall from "../components/hero-small"

export default function CountriesPage() {
    return (
        <Layout>
            <Seo title="Countries" />
            <HeroSmall title="Countries" bgImage='/images/approach/vision-and-value-1.jpg' bgImageMobile='/images/approach/vision-and-value-mobile.jpg' />
            <section id="countries">
                <div className="container">
                    </div>
                    </section>
        </Layout>
    )
}
