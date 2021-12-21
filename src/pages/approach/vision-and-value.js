import React from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ScrollAnimation from 'react-animate-on-scroll';
import Healthcare from '../../images/healthcare.svg'
import Elderly from '../../images/elder.svg'
import Disability from '../../images/disability.svg'
import Children from '../../images/children.svg'
import Mother from '../../images/mother.svg'
import Vision from '../../images/vision-illustration.svg'
import ValueProposition from '../../images/value_proposition.svg'
import "./vision-and-approach.css"
import {IoIosPlay} from "react-icons/io";
import {Parallax,ParallaxBanner} from 'react-scroll-parallax';
import {Link} from "gatsby"
import HeroSmall from "../../components/hero-small";


export default function VisionPage() {
    return (
        <Layout>
            <Seo title="Vision and value proposition" />
            <HeroSmall title="Vision and value proposition" bgImage='/images/approach/vision-and-value-1.jpg' bgImageMobile='/images/approach/vision-and-value-mobile.jpg' />
            <section id="vision" className="vision">
                <div className="container">
                    <div className="row align-items-center justify-content-center space-vertical">
                        <ScrollAnimation animateIn="animate__fadeInUp">
                            <h1 className="section-title-bold space-vertical-bottom">Life without social protection means</h1>
                        </ScrollAnimation>
                        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                            <ul class="timeline timeline-centered">
                                <li class="timeline-item">
                                    <div class="timeline-info align-items-center justify-content-center">
                                        <ScrollAnimation animateIn="animate__flipInX" className="align-self-center">
                                            <Healthcare className="body-image-big" />
                                        </ScrollAnimation>
                                    </div>
                                    <div class="timeline-content">
                                        <p className="body-large">People cannot access the health care services they need </p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info align-items-center justify-content-center">
                                        <ScrollAnimation animateIn="animate__flipInX" className="align-self-center">
                                            <Children className="body-image-big" />
                                        </ScrollAnimation>
                                    </div>
                                    <div class="timeline-content">
                                        <p className="body-large">Children have to work to help their parents </p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info align-items-center justify-content-center">
                                        <ScrollAnimation animateIn="animate__flipInX" className="align-self-center">
                                            <Mother className="body-image-big" />
                                        </ScrollAnimation>
                                    </div>
                                    <div class="timeline-content">
                                        <p className="body-large">Women have to go back to work the day after deliveing their babies </p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info align-items-center justify-content-center">
                                        <ScrollAnimation animateIn="animate__flipInX" className="align-self-center">
                                            <Elderly className="body-image-big" />
                                        </ScrollAnimation>
                                    </div>
                                    <div class="timeline-content">
                                        <p className="body-large">Frail older persons have to work until they die </p>
                                    </div>
                                </li>
                                <li class="timeline-item">
                                    <div class="timeline-info align-items-center justify-content-center">
                                        <ScrollAnimation animateIn="animate__flipInX" className="align-self-center">
                                            <Disability className="body-image-big" />
                                        </ScrollAnimation>
                                    </div>
                                    <div class="timeline-content">
                                        <p className="body-large">Persons with disability have no income on their own </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ParallaxBanner
                    className="image-divider"
                    layers={[
                        {
                            image: '/images/approach/vision-and-value-divider.jpg',
                            amount: -0.2,
                        },
                    ]}
                    style={{
                        height: '25rem',
                        backgroundPosition: 'top',
                        backgroundSize: 'cover'
                    }}
                >
                </ParallaxBanner>
                {/* <Parallax bgImage="/images/divider-image.jpeg" className="image-divider" bgStyle={{backgroundPosition: 'bottom top',backgroundSize: 'cover'}} bgImageAlt="Building social protection floors for all" strength={-200}></Parallax> */}
                <div className="container">
                    <div className="row align-items-center justify-content-around pb-3  sm-column">
                        <ScrollAnimation animateIn="animate__fadeInUp">
                            <h1 className="section-title-bold space-vertical">Our vision</h1>
                        </ScrollAnimation>
                        <div className="col-lg-6 col-md-12 col-sm-12 body-large">
                            <p className="col-lg-11 col-md-12 col-sm-12 body-xl-large pb-4">Our vision is a world where all countries have national social protection systems that: </p>
                            <p className="col-lg-9 col-md-12 col-sm-12 ident bold"><IoIosPlay className="tri-bullet" />Provide adequate social protection to all their population throughout their lives, prevent poverty, reduce inequality and combat social exclusion;</p>
                            <p className="col-lg-8 col-md-12 col-sm-12 ident bold"><IoIosPlay className="tri-bullet" />Are not temporary arrangements, but robust, reliable and sustainable mechanisms;</p>
                            <p className="col-lg-11 col-md-12 col-sm-12 ident bold"><IoIosPlay className="tri-bullet" />Should be built on national consensus achieved through inclusive social dialogue;</p>
                            <p className="col-lg-9 col-md-12 col-sm-12 ident bold"><IoIosPlay className="tri-bullet" />Should be embedded in law to provide rights and obligations for current and future generations;</p>
                            <p className="col-lg-12 col-md-12 col-sm-12 ident bold"><IoIosPlay className="tri-bullet" />Should be adequately and sustainably financed.</p>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-lg-2 col-sm-12">
                            <h3 className='mb-1 video-title bold'>Mozambique</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/babu1BLiNHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p className="col-lg-12 col-md-12 col-sm-12 body-medium t-b"><IoIosPlay className="tri-bullet" />COVID 19 and my disability won't stop my search for work</p>
                        </div>
                    </div>
                </div>
                <div className="blue-background">
                    <div className="container">
                        <div className="row align-items-center justify-content-around pb-3 space-vertical sm-column">
                            <div className="col-lg-6 col-md-12 mt-lg-2 col-sm-12 body-medium">
                                <ValueProposition className="space-vertical" />
                            </div>
                            <div className="col-lg-5 col-md-12 mt-lg-2 col-sm-12 body-medium justify-content-end">
                                <ScrollAnimation animateIn="animate__fadeInUp">
                                    <h1 className="section-subtitle-bold white space-vertical ">Our value proposition</h1>
                                </ScrollAnimation>
                                <p className="body-medium white">
                                    Through its Flagship Programme the ILO and its partners make the shared ambition of universal social protection a reality in at least 50 countries.
                                    Through their contribution to the Flagship Programme and synergies across projects, development partners help achieve much wider and sustainable changes than through standalone projects.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center space-vertical sm-column">
                    <Link to="/approach/theory-of-change" className="standard-btn-filled">Theory of change</Link>
                </div>
            </section>
        </Layout>
    )
}
