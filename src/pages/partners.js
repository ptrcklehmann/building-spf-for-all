import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSmall from "../components/hero-small"

export default function ResourcesPage() {
    return (
        <Layout>
            <Seo title="Partners" />
            <HeroSmall title="Partners" bgImage='/images/approach/vision-and-value-1.jpg' bgImageMobile='/images/approach/vision-and-value-mobile.jpg' />
            <section id="partners">
                <div className="container">
                    </div>
                    </section>
        </Layout>
    )
}
