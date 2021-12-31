import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSmall from "../components/hero-small"

export default function NewsEventsPage() {
    return (
        <Layout>
            <Seo title="News and events" />
            <HeroSmall title="News and events" bgImage='/images/approach/vision-and-value-1.jpg' bgImageMobile='/images/approach/vision-and-value-mobile.jpg' />
            <section id="news-and-events">
                <div className="container">
                    </div>
                    </section>
        </Layout>
    )
}
