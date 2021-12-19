import * as React from "react"
import LandingLayout from "../components/landingLayout"
import Seo from "../components/seo"
import FlagshipLogo from '../images/flagship-programme-logo.svg'
import Adequacy from '../images/adequacy.svg'
import Effective from '../images/effective-coverage.svg'
import Institutional from '../images/institutional-changes.svg'
import Legal from '../images/legal-coverage.svg'
import {Parallax, ParallaxBanner} from 'react-scroll-parallax';
import {Link} from "gatsby"
import "animate.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import SwiperCore,{
  Pagination,Navigation,Autoplay,EffectFade
} from 'swiper';

SwiperCore.use([Pagination,Navigation,Autoplay]);

const IndexPage=() => (
  <LandingLayout>
    <Seo title="Home" />
    <section id="about" className="about">
      <div className="container">
        <div className="py-5 row d-flex align-items-center justify-content-center">
          <Parallax y={[-20,20]}>
            <h1 className="section-title-bold">ILO Global Flagship Programme</h1>
          </Parallax>
          <div className="row align-items-center justify-content-center pb-3 space-vertical sm-column">
            <ScrollAnimation animateIn="animate__slideInUp" className="col-lg-3 col-md-12 col-sm-12 align-self-center">
              <div className="square-image">
                <FlagshipLogo className="body-image-big" alt="ILO Flagship Programme" />
              </div>
            </ScrollAnimation>
            <p className="col-lg-6 col-md-12 col-sm-12 body-large">The ILO's Global Flagship Programme on Building Social Protection Floors for All, launched in early 2016, supports the implementation of social protection systems including floors, guided by ILO's social security standards. </p>
          </div>
          <div className="row flex-lg-row flex-md-row align-items-center justify-content-center flex-md-column-reverse flex-sm-column-reverse">
            <p className="col-lg-6 col-md-12 mt-lg-2 col-sm-12 body-large">Working across 50 priority countries, it aims to change the lives of millions of people by 2025 and provide evidence on ILO's contribution to the Sustainable Development Goals on social protection.</p>
            <ScrollAnimation animateIn="animate__slideInUp" className="col-lg-4 col-md-12 col-sm-12 justify-items-end justify-items-sm-center row">
              <div className="d-flex row justify-lg-content-center align-items-center justify-content-md-start">
                <img src='/images/SDG_logo.png' className="body-image-big col-6" alt="Sustainable Development Goals" />
                <img className="body-image-small col-1" src='/images/E_WEB_01.png' alt="SDG 01" />
                <img className="body-image-small col-1" src='/images/E_WEB_03.png' alt="SDG 03" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <ParallaxBanner
        className="image-divider"
        layers={[
          {
            image: '/images/divider-image.jpeg',
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
      {/* <Parallax bgImage="" className="image-divider" bgStyle={{backgroundPosition: 'bottom top',backgroundSize: 'cover'}} bgImageAlt="Building social protection floors for all" strength={-200}></Parallax> */}
      <div className="container">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h1 className="section-title-bold-center space-vertical">Our ambition 2025</h1>
        </ScrollAnimation>
        <div className="timeline">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 news-item">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="news-content">
                  <Institutional alt="Intitutional changes" className="body-image-big" />
                  <article>
                    <h3>Institutional changes</h3>
                    <p className="body-large">
                      Achieve over <span>90 institutional changes</span> to strengthen social protection systems</p>
                  </article>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 news-item right">
              <ScrollAnimation animateIn="animate__fadeInUp ">
                <div className="news-content">
                  <article >
                    <h3>Adequacy and comprehensiveness</h3>
                    <p className="body-large">
                      Improve benefit adequacy and comprehensiveness for <span>10 million</span> people</p>
                  </article>
                  <Adequacy alt="Adequacy" className="body-image-big" />
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 news-item">
              <ScrollAnimation animateIn="animate__fadeInUp" >
                <div className="news-content">
                  <Legal alt="Legal coverage" className="body-image-big" />
                  <article>
                    <h3>Legal coverage</h3>
                    <p className="body-large">
                      Improve legal coverage for <span>20 million</span> people
                    </p>
                  </article>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 news-item right">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="news-content">
                  <article >
                    <h3>Effective coverage</h3>
                    <p className="body-large">
                      Increase effective coverage for<span> 30 million</span> people
                    </p>
                  </article>
                  <Effective alt="Effective coverage" className="body-image-big" />
                </div>
              </ScrollAnimation>
            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <h1 className="section-title-bold space-vertical">Latest from  <Link className="news" to='/news'>{' '}News & Events</Link></h1>
        </div>
        <Swiper
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            "clickable": true
          }}
          navigation={true}
          autoplay={{
            "delay": 3500,
            "disableOnInteraction": false
          }}
          className="mySwiper"
          style={{'--swiper-navigation-color': '#1F054D'}}
          breakpoints={{
            "640": {
              "slidesPerView": 1,
              "spaceBetween": 0
            },
            "768": {
              "slidesPerView": 2,
              "spaceBetween": 10
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 5
            }
          }}
          effect={'fade'}>
          <SwiperSlide>
            <div className="card-news">
              <p className="year">2021</p>
              <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/49849451172_d09bd9e01e_k.jpg)'}}>
                <div className="card-header ">
                  <h3 className="card-title "><Link to="# ">Cras elementum lacinia tristique. </Link></h3>
                  <Link to="# " className="standard-btn">Go to link</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-news" >
              <p className="year">2021</p>
              <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/49846550311_7428f3a54a_k.jpg)'}}>
                <div className="card-header ">
                  <h3 className="card-title "><Link to="# ">Duis vulputate blandit ante nec bibendum.</Link></h3>
                  <Link to="# " className="standard-btn">Go to link</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-news">
              <p className="year">2021</p>
              <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/49846440843_b876563475_k.jpg)'}}>
                <div className="card-header ">
                  <h3 className="card-title"><Link to="# ">Pellentesque nec dignissim neque</Link></h3>
                  <Link to="#" className="standard-btn">Go to link</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-news">
              <p className="year">2021</p>
              <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/49846440843_b876563475_k.jpg)'}}>
                <div className="card-header ">
                  <h3 className="card-title"><Link to="# ">Pellentesque nec dignissim neque</Link></h3>
                  <Link to="#" className="standard-btn">Go to link</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="row align-items-end justify-content-end space-vertical-bottom" style={{backgroundImage: 'url(/images)'}}>
          <Link to="/news-and-events" className="standard-btn">See more</Link>
        </div>
      </div>
      <ParallaxBanner
        className="image-divider"
        layers={[
          {
            image: '/images/divider-image-2.jpeg',
            amount: -0.2,
          },
        ]}
        style={{
          height: '22rem',
          backgroundPosition: 'top',
          backgroundSize: 'cover'
        }}
      >
      </ParallaxBanner>
      {/* <Parallax bgImage="/images/divider-image-2.jpeg" className="image-divider" bgStyle={{backgroundPosition: 'bottom top',backgroundSize: 'cover'}} bgImageAlt="Building social protection floors for all" strength={200}></Parallax> */}
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center p-0">
          <h1 className="section-title-bold space-vertical">Latest  <Link className="pub" to='/resources'>{' '} Publications</Link></h1>
        </div>
        <div className="row d-flex align-items-between justify-content-between">
          <div className="card col-md-6 col-lg-4">
            <p className="year">2021</p>
            <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/strategy_for_the_second_phase.jpg)'}}>
              <div className="card-header">
                {/* <span className="card-subject">Building social protection floors for all</span> */}
                <h3 className="card-title "><Link to="# ">Strategy for the second phase 2021-2025</Link></h3>
                <Link to="#" className="standard-btn">Go to link</Link>
              </div>
            </div>
          </div>
          <div className="card col-md-6 col-lg-4 ">
            <p className="year">2021</p>
            <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/5-year-report.jpg)'}}>
              <div className="card-header ">
                {/* <span className="card-subject ">Building social protection floors for all</span> */}
                <h3 className="card-title "><Link to="# "> Report of the first phase 2016-2020</Link></h3>
                <Link to="#" className="standard-btn">Go to link</Link>
              </div>
            </div>
          </div>
          <div className="card col-md-6 col-lg-4 ">
            <p className="year">2021</p>
            <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/annexes-thematic.jpg)'}}>
              <div className="card-header ">
                {/* <span className="card-subject ">Building social protection floors for all</span> */}
                <h3 className="card-title "><Link to="# ">Thematic areas prioritized in the second phase of Flagship Programme
                  2021-2025</Link></h3>
                <Link to="#" className="standard-btn">Go to link</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-end justify-content-end mx-1">
          <Link to="/resources" className="standard-btn">See more</Link>
        </div>
        <div className="container space-vertical">
          <div className="row fluid d-flex wrap justify-content-center">
            <Link to="/funding-gaps" className="standard-btn-filled">Become a development partner</Link>
          </div>
        </div>
      </div>
    </section>

    {/* <div className="row ">
                <div className="mb-4 col-12 col-md-12 col-lg-12 animate ">
                    <h2 className="level-1 rectangle square ">Life without social protection means</h2>
                    <ol className="animate level-2-wrapper ">
                        <li className="square ">
                            <p className="level-2 rectangle lh-base ">People cannot access the health care services they need</p>
                        </li>
                        <li className="square ">
                            <p className="level-2 rectangle lh-base ">Children have to work to help their parents</p>
                        </li>
                        <li className="square ">
                            <p className="level-2 rectangle lh-base ">Women have to go back to work the day after deliveing their babies
                            </p>
                        </li>
                        <li className="square ">
                            <p className="level-2 rectangle lh-base ">Frail older persons have to work until they die</p>
                        </li>
                        <li className="square ">
                            <p className="level-2 rectangle lh-base ">Persons with disability have no income on their own </p>
                        </li>
                    </ol>
                </div>
            </div> */}
  </LandingLayout>
)

export default IndexPage
