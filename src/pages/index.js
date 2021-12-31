import * as React from "react"
import LandingLayout from "../components/landingLayout"
import Seo from "../components/seo"
import FlagshipLogo from '../images/flagship-programme-logo.svg'
import Adequacy from '../images/adequacy.svg'
import Effective from '../images/effective-coverage.svg'
import Institutional from '../images/institutional-changes.svg'
import Legal from '../images/legal-coverage.svg'
import {Parallax} from "react-parallax";
import {Link} from "gatsby"
import "animate.css";
import ScrollAnimation from 'react-animate-on-scroll';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import SwiperCore,{
  Pagination,Navigation,Autoplay,
} from 'swiper';
import DoubleBullet from '../images/double-bullet.svg'


SwiperCore.use([Pagination,Navigation,Autoplay]);

const IndexPage=() => (
  <LandingLayout>
    <Seo title="Home" />
    <section id="about" className="about">
      <div className="container">
        <div className="py-5 row d-flex align-items-center justify-content-center">
          <div className="row align-items-center justify-content-center pb-3  sm-column">
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
      <Parallax bgImage="../images/divider-image.jpg" strength={200}>
      <div className="image-divider">

          </div>
      </Parallax>
      <div className="container">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h1 className="section-title-bold space-vertical">Our ambition <Link className="news" to='/#'>{' '}2025</Link></h1>
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
                  <article>
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
      <div className="container space-vertical">
        <div className="row d-flex align-items-center justify-content-center">
          <h1 className="section-title-bold space-vertical-bottom">Latest from  <Link className="news" to='/news-and-events'>{' '}News & Events</Link></h1>
        </div>
        <Swiper
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            "clickable": true
          }}
          navigation={true}
          autoplay={{
            "delay": 5500,
            "disableOnInteraction": false
          }}
          style={{'--swiper-navigation-color': '#1F054D'}}
          breakpoints={{
            "640": {
              "slidesPerView": 1,
              "spaceBetween": 0
            },
            "768": {
              "slidesPerView": 2,
              "spaceBetween": 2
            },
            "1024": {
              "slidesPerView": 2,
              "spaceBetween": 2
            }
          }}>
          <SwiperSlide>
            <div className="card-news">
              <div className="wrapper" style={{backgroundImage: 'url(/images/49849451172_d09bd9e01e_k.jpg)'}}>
                <div className="card-header ">
                  <h3 className="card-title "><Link to="# ">Cras elementum lacinia tristique. </Link></h3>
                  <Link to="# " className="standard-btn">Go to link</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-news">
              <div className="wrapper" style={{backgroundImage: 'url(/images/49846440843_b876563475_k.jpg)'}}>
                <div className="card-header ">
                  <h3 className="card-title"><Link to="# ">Pellentesque nec dignissim neque</Link></h3>
                  <Link to="#" className="standard-btn">Go to link</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-news">
              <div className="wrapper" style={{backgroundImage: 'url(/images/49846440843_b876563475_k.jpg)'}}>
                <div className="card-header ">
                  <h3 className="card-title"><Link to="# ">Pellentesque nec dignissim neque</Link></h3>
                  <Link to="#" className="standard-btn">Go to link</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="row align-items-end justify-content-end mx-1">
          <Link to="/news-and-events" className="standard-btn">See more</Link>
        </div>
      </div>
      <Parallax bgImage="../images/index-divider-2.jpg" strength={200} >
        <div className="image-divider">

        </div>
      </Parallax>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center p-0">
          <h1 className="section-title-bold space-vertical">Latest  <Link className="pub" to='/resources'>{' '} Publications</Link></h1>
        </div>
        <div className="row d-flex align-items-between justify-content-between">
          <div className="card col-md-6 col-lg-4">
            <p className="year">2021</p>
            <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/strategy_for_the_second_phase.jpg)'}}>
              <div className="card-header">
                <h3 className="card-title "><Link to="# ">Strategy for the second phase 2021-2025</Link></h3>
                <Link to="#" className="standard-btn">Go to link</Link>
              </div>
            </div>
          </div>
          <div className="card col-md-6 col-lg-4 ">
            <p className="year">2021</p>
            <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/5-year-report.jpg)'}}>
              <div className="card-header ">
                <h3 className="card-title "><Link to="# "> Report of the first phase 2016-2020</Link></h3>
                <Link to="#" className="standard-btn">Go to link</Link>
              </div>
            </div>
          </div>
          <div className="card col-md-6 col-lg-4 ">
            <p className="year">2021</p>
            <div className="wrapper d-flex justify-content-end flex-column " style={{backgroundImage: 'url(/images/annexes-thematic.jpg)'}}>
              <div className="card-header ">
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
  </LandingLayout>
)

export default IndexPage
