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
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})