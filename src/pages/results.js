import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSmall from "../components/hero-small"

export default function ResultsPage() {
    return (
        <Layout>
            <Seo title="Results" />
            <HeroSmall title="Results" bgImage='/images/approach/vision-and-value-1.jpg' bgImageMobile='/images/approach/vision-and-value-mobile.jpg' />
            <section id="results">
                <div className="container">
                    </div>
                    </section>
        </Layout>
    )
}
