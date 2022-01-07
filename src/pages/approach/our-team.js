import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroSmall from "../../components/hero-small";

export default function OurTeamPage() {
    return (
        <Layout>
            <Seo title="Our Team" />
            <section id="team" className="our-team">
                <HeroSmall title="Our Team" bgImage='/images/approach/theory-of-change.jpg' bgImageMobile='/images/approach/theory-of-change-mobile.jpg' />
                <div className="container">
                    
                </div>
            </section>
        </Layout>
    )
}
