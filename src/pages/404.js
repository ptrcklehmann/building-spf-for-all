import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../components/hero.css'
import DoubleBullet from '../images/double-bullet.svg'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section id="hero" className="" style={{background: '#1E2DBE', paddingLeft: '6rem', height: 'calc(100vh - 295px)'}}>
            <div className="hero-row">
                <div className="hero-heading">
                    <DoubleBullet className="double-bullet" />
                    <h1>404: Not found</h1>
                    <h3>Looks like the page you were <br /> looking for doesn't exist.</h3>
                </div>
            </div>
        </section>
  </Layout>
)

export default NotFoundPage
