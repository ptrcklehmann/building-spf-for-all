$(".partn-list .usp").hover (
    function () {    /* on hover over*/
      $(".priority-countries").addClass("active")
      $(".un").addClass("active")
      $(".partner-countries").addClass("active")
      $(".int-financial").addClass("active")
      $(".workers").addClass("active")
    },
    function () {    /* on hover out*/
      $(".priority-countries").removeClass("active")
      $(".un").removeClass("active")
      $(".partner-countries").removeClass("active")
      $(".int-financial").removeClass("active")
      $(".workers").removeClass("active")
    }
)
$(".partn-list .unlist").hover (
    function () {    /* on hover over*/
      $(".un").addClass("active")
    },
    function () {    /* on hover out*/
      $(".un").removeClass("active")
    }
)
$(".partn-list .spiacB").hover (
    function () {    /* on hover over*/
      $(".un").addClass("active")
      $(".partner-countries").addClass("active")
      $(".int-financial").addClass("active")
    },
    function () {    /* on hover out*/
      $(".un").removeClass("active")
      $(".partner-countries").removeClass("active")
      $(".int-financial").removeClass("active")
    }
)
$(".partn-list .transform").hover (
    function () {    /* on hover over*/
      $(".priority-countries").addClass("active")
      $(".un").addClass("active")
    },
    function () {    /* on hover out*/
      $(".priority-countries").removeClass("active")
      $(".un").removeClass("active")
    }
)
$(".partn-list .global").hover (
    function () {    /* on hover over*/
      $(".employers").addClass("active")
    },
    function () {    /* on hover out*/
      $(".employers").removeClass("active")
    }
)
$(".partn-list .spf-network").hover (
    function () {    /* on hover over*/
      $(".workers").addClass("active")
    },
    function () {    /* on hover out*/
      $(".workers").removeClass("active")
    }
)
$(".partn-list .global-coalition").hover (
    function () {    /* on hover over*/
      $(".workers").addClass("active")
      $(".civil-society").addClass("active")

    },
    function () {    /* on hover out*/
      $(".workers").removeClass("active")
      $(".civil-society").removeClass("active")
    }
)
$(document).ready(function(){
  $('.usp-tooltip').tooltip({
    placement: 'right',
    html: true,
    title: "<p>Created in 2016, and co-chaired by the ILO and World Bank, USP2030 promotes both global policy development and country-level implementation</p><a href='https://www.usp2030.org/gimi/USP2030.action' target='_blank'>Read more<i class='icofont-rounded-right'></i></a>",
    delay: {show: 500, hide: 1000}
  });
});