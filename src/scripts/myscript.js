var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


// Preloader
$(document).ready(function() {
  setTimeout(function() {
      $('body').addClass('loaded');
  }, 500);
  
  });


//Portfolio Filtering
$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');

      $(".portfolio-gallery").css("opacity" , "0");
      
      if(value == "all")
      {
          $('.filter').show();
          setTimeout(() => {
            $('.filter').css("opacity" , "1");
          }, 300);
      }
      else
      {
          $(".filter").not('.'+value).hide();
          $('.filter').filter('.'+value).show(); 

          setTimeout(() => {
            $('.filter').filter('.'+value).css("opacity" , "1");
          }, 300);
      }
  });

});

// Scrolltop Offset -100
$("document").ready(function () {

  // $(".header-main .navbar-nav a").each(function () { 
  //   $(this).click(function () {
  //     $('html, body').animate({
  //       scrollTop: $(window.location.hash).offset().top -100
  //     }, 'fast');
  //   })
  // })

  // $(".header-main .navbar-nav a").click(function () { 
  //   $.scrollTo($($(this).attr("href")) -100, { 
  //     duration: 750 
  //   }); return false; 
  // })

  $('.header-main a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 'fast');
        return false;
      }
    }
  });
  
  // if($(window.location.hash).length > 0){
  //   $('html, body').animate({
  //     scrollTop: $(window.location.hash).offset().top -500
  //   }, 1000);
  // }

  // $('.nav-services').click(function () {

  //     $('html, body').animate({
  //         scrollTop: $("#services").offset().top -100
  //     }, 'fast');

  // });
});

// $("document").ready(function () {

//   $('.nav-about').click(function () {

//       $('html, body').animate({
//           scrollTop: $("#about").offset().top -100
//       }, 'fast');

//   });
// });

// $("document").ready(function () {

//   $('.nav-portfolio').click(function () {

//       $('html, body').animate({
//           scrollTop: $("#portfolio").offset().top -100
//       }, 'fast');

//   });
// });
