import * as React from "react"
import LandingLayout from "../components/landingLayout"
import Seo from "../components/seo"
import FlagshipLogo from '../images/flagship-programme-logo.svg'
import Adequacy from '../images/adequacy.svg'
import Effective from '../images/effective-coverage.svg'
import Institutional from '../images/institutional-changes.svg'
import Legal from '../images/legal-coverage.svg'
import {Parallax,Background} from "react-parallax";
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
import SDGLogo from '../images/SDG-logo.svg'
import SDG3 from '../images/sdg-3.svg'
import SDG6 from '../images/sdg-6.svg'
import SDG2 from '../images/sdg-2.svg'
import SDG5 from '../images/sdg-5.svg'
import SDG8 from '../images/sdg-8.svg'
import SDG10 from '../images/sdg-10.svg'
import SDG13 from '../images/sdg-13.svg'
import SDG16 from '../images/sdg-16.svg'




SwiperCore.use([Pagination,Navigation,Autoplay]);

const IndexPage=() => (
  <LandingLayout>
    <Seo title="Home" />
    <section id="about" className="about space-vertical">
      <div className="container m-auto row align-items-center justify-content-end">
        <div class="col-lg-2 col-md-3 col-sm-2">
          <FlagshipLogo alt="ILO Flagship Programme" />
        </div>
        <article class="col-lg-7 col-md-7 col-sm-8">
          <div class="postcard__preview-txt body-text-emphasys">The ILO's Global Flagship Programme on <span>Building Social Protection Floors for All</span>, launched in early 2016, supports the implementation of social protection systems including floors, guided by ILO's social security standards.</div>
        </article>
      </div>
      <div className="container m-auto row align-items-center justify-content-end">
        <div className="col-lg-2 col-md-2 col-sm-4 space-vertical" >
          <SDGLogo style={{width: '100%',padding: '.3rem'}} />
        </div>
        <div className="col-lg-1 col-md-1 col-sm-2">
          <SDG3 style={{width: '100%',height: '100%',padding: '.3rem'}} />
          <SDG6 style={{width: '100%',height: '100%',padding: '.3rem'}} />
        </div>
        <article class="col-lg-7 col-md-7 col-sm-8">
          <div class="postcard__preview-txt body-text">Working across 50 priority countries, it aims to change the lives of millions of people by 2025 and provide evidence on ILO's contribution to the Sustainable Development Goals on social protection.</div>
          <div className="col-lg-7 col-md-7 col-sm-12 pt-2">
            <SDG2 style={{width: '3rem',height: '100%',marginRight: '.3rem'}} />
            <SDG5 style={{width: '3rem',height: '100%',marginRight: '.3rem'}} />
            <SDG8 style={{width: '3rem',height: '100%',marginRight: '.3rem'}} />
            <SDG10 style={{width: '3rem',height: '100%',marginRight: '.3rem'}} />
            <SDG13 style={{width: '3rem',height: '100%',marginRight: '.3rem'}} />
            <SDG16 style={{width: '3rem',height: '100%',marginRight: '.3rem'}} />
          </div>
        </article>
      </div>
      <div className="container m-auto row align-items-center justify-content-lg-end justify-content-md-center">
        <article class="col-lg-8 col-md-12 col-sm-12 row align-items-center justify-content-lg-end justify-content-md-center p-0">
          <Parallax strength={-50} className="sub-par-wrapper">
            <Background className='image-sub'>
              <div style={{
                backgroundImage: 'url(../images/divider-image.jpeg)',
                width: '100vw',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} className='image-sub'>
              </div>
            </Background>
          </Parallax>
        </article>
      </div>
      <div className="space-vertical-bottom"></div>
      <div className="container m-auto align-items-center justify-content-start">
        <h1 className="section-title-bold col-lg-7 col-md-10 col-sm-12 mb-0">
          <ScrollAnimation animateIn="animate__fadeInUp">Our ambition <Link className="news" to='/approach/vision-and-value'>{' '}2025</Link></ScrollAnimation></h1>
        <div className="card-bg col-lg-7 col-md-10 col-sm-12">
          <article className="stats-card">
            <div className="stats-card-info">
              <h1 className="card-title">Institutional changes</h1>
              <p className="body-text">Achieve over <span>90 institutional changes</span> to strengthen social protection systems</p>
            </div>
            <Institutional alt="Intitutional changes" className="stats-card-image" />
          </article>

          <article className="stats-card">
            <div className="stats-card-info">
              <h1 className="card-title">Adequacy and comprehensiveness</h1>
              <p className="body-text">Improve benefit adequacy and comprehensiveness for <span>10 million</span> people</p>
            </div>
            <Adequacy alt="Adequacy" className="stats-card-image" />
          </article>

          <article className="stats-card">
            <div className="stats-card-info">
              <h1 className="card-title">Legal coverage</h1>
              <p className="body-text">Improve legal coverage for <span>20 million</span> people</p>
            </div>
            <Legal alt="Legal coverage" className="stats-card-image" />
          </article>

          <article className="stats-card">
            <div className="stats-card-info">
              <h1 className="card-title">Effective coverage</h1>
              <p class="body-text">Increase effective coverage for<span> 30 million</span> people</p>
            </div>
            <Effective alt="Effective coverage" className="stats-card-image" />
          </article>
        </div>
      </div>
      <div className="space-vertical">
        <div className="container m-auto align-items-center justify-content-center">
          <h1 className="section-title-bold col-lg-12 col-md-12 col-sm-12 space-vertical-bottom">Latest from  <Link className="news" to='/news-and-events'>{' '}News & Events</Link></h1>
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
