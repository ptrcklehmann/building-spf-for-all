(function($) {
  "use strict"

  /*----------------------------------------
  Sticky Header Activation
  ------------------------------------------*/
  $(window).on('scroll',function() {
    if($(this).scrollTop()>25) {
      $('.sticky-header').addClass('sticky')
    } else {
      $('.sticky-header').removeClass('sticky')
    }
  })

  /*--
      Custom script to call Background
      Image & Color from html data attribute
  -----------------------------------*/
  $('[data-bg-image]').each(function() {
    const $this=$(this),
      $image=$this.data('bg-image')
    $this.css('background-image','url('+$image+')')
  })
  $('[data-bg-color]').each(function() {
    const $this=$(this),
      $color=$this.data('bg-color')
    $this.css('background-color',$color)
  })

  /*---------------------------
    Hero Parallax activation
  -----------------------------------*/
  new Rellax('.hero-background')

  /*---------------------------
    Life without social protection menuspy
  -----------------------------------*/
  const lavalampElm=document.querySelector('.lavalamp')
  const positionLavalamp=function(activeElm) {
    lavalampElm.style.width=activeElm.elm.offsetWidth+'px'
    lavalampElm.style.left=activeElm.elm.offsetLeft+'px'
  }
  const elm=document.querySelector('#info-header')
  const ms=new MenuSpy(elm,{
    threshold: 45,
    callback: positionLavalamp
  })
  $(elm&&positionLavalamp({elm: elm.querySelector('li.active')}))


  /*----------------------------------------
    Responsive Mobile Menu
  ------------------------------------------*/
  //Variables
  const $offCanvasNav=$('.mobile-menu, .category-menu'),
    $offCanvasNavSubMenu=$offCanvasNav.find('.dropdown')

  //Close Off Canvas Sub Menu
  $offCanvasNavSubMenu.slideUp()

  //Category Sub Menu Toggle
  $offCanvasNav.on('click','li a, li .menu-expand',function(e) {
    const $this=$(this)
    if(($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/))&&($this.attr('href')==='#'||$this.hasClass('menu-expand'))) {
      e.preventDefault()
      if($this.siblings('ul:visible').length) {
        $this.parent('li').removeClass('active')
        $this.siblings('ul').slideUp()
      } else {
        $this.parent('li').addClass('active')
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active')
        $this.closest('li').siblings('li').find('ul:visible').slideUp()
        $this.siblings('ul').slideDown()
      }
    }
  })

  /*----------------------------------------*/
  /*  When document is loading, do
  /*----------------------------------------*/
  const varWindow=$(window)
  varWindow.on('load',function() {
    AOS.init({
      once: true,
    })
  })


  /*----------------------------------------*/
  /*  Splitting When Document is Loading, do
  /*----------------------------------------*/
  Splitting()



  /*---------------------------------
    Project's Slider Activation
  -----------------------------------*/
  const publications=new Swiper('.project-slider.swiper-container',{
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  })


  init()
  function init() {
    setStickyContainersSize()
    bindEvents()
  }

  function bindEvents() {
    window.addEventListener("wheel",wheelHandler)
  }

  function setStickyContainersSize() {
    document.querySelectorAll('.sticky-container').forEach(function(container) {
      const stikyContainerHeight=(container.querySelector('main').offsetWidth+window.innerHeight)
      container.setAttribute('style','height: '+stikyContainerHeight+'px')
    })
  }

  function isElementInViewport(el) {
    const rect=el.getBoundingClientRect()
    return rect.top<=0&&rect.bottom>document.documentElement.clientHeight
  }

  function wheelHandler(evt) {
    const containerInViewPort=Array.from(document.querySelectorAll('.sticky-container')).filter(function(container) {
      return isElementInViewport(container)
    })[0]

    if(!containerInViewPort) {
      return
    }

    const isPlaceHolderBelowTop=containerInViewPort.offsetTop<document.documentElement.scrollTop
    const isPlaceHolderBelowBottom=containerInViewPort.offsetTop+containerInViewPort.offsetHeight>document.documentElement.scrollTop
    let g_canScrollHorizontally=isPlaceHolderBelowTop&&isPlaceHolderBelowBottom

    if(g_canScrollHorizontally) {
      containerInViewPort.querySelector('main').scrollLeft+=evt.deltaY
      containerInViewPort.querySelector('main').classList.add('visible')
    }

  }



  /*---------------------------------
      Brand Slider Activation
  -----------------------------------*/
  const brands=new Swiper('.brand-slider.swiper-container',{
    slidesPerView: 1,
    // init: false,
    loop: true,
    pagination: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 140,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 140,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 200,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 140,
      },
    }
  })


  /*----------------------------------------*/
  /*  Scroll to top
  /*----------------------------------------*/
  function scrollToTop() {
    let scrollUp=$('#scroll-top'),
      lastScrollTop=0,swindow=$(window)
    swindow.on('scroll',function() {
      let st=$(this).scrollTop()
      if(st>lastScrollTop) {
        scrollUp.removeClass('show')
      } else {
        if(swindow.scrollTop()>200) {
          scrollUp.addClass('show')
        } else {
          scrollUp.removeClass('show')
        }
      }
      lastScrollTop=st
    })

    scrollUp.on('click',function(evt) {
      $('html, body').animate({scrollTop: 0},600)
      evt.preventDefault()
    })
  }
  scrollToTop()
  var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList=tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  Splitting()

})(jQuery)