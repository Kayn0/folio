$(document).ready(function(){
  $('html').animate({scrollTop:0}, 1);
  $('body').animate({scrollTop:0}, 1);

  // **** Site preloader ***** //
  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 3000);
                                        
  // **** Smooth scroll ***** //
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1100);
          return false;
        }
      }
    });
  });          
     
  // **** Navigation click and hover effect ***** //              
  (function() {
    [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
      var menuItems = menu.querySelectorAll('.menu__link');
      var activeLink = menu.querySelector('.menu__item--current'); 
      var page2 = $('#about-me').offset().top - 100;
      var page3 = $('#projects').offset().top - 100;

      //On click set active link
      setCurrent = function(ev) {
        var item = ev.target.parentNode; // li        
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        classie.add(item, 'menu__item--current');
        activeLink = item;
      };

      //On hover animate link
      addCurrent = function(ev) {
        var item = ev.target.parentNode; // li
        if (classie.has(item, 'menu__item--current')) {
          return false;
        }
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        classie.add(item, 'menu__item--current');
      };

      //On mouseout remove active link
      removeCurrent = function(ev) {
        var item = ev.target.parentNode; // li
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        classie.add(activeLink, 'menu__item--current');
      };

      [].slice.call(menuItems).forEach(function(el) {
        el.addEventListener('click', setCurrent);
        el.addEventListener('mouseover', addCurrent);
        el.addEventListener('mouseout', removeCurrent);
      });

      //Set relevant active link as user scolls.
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
          $('.menu__item--current').removeClass('menu__item--current');
          $('.link4').addClass('menu__item--current');
        }
        else if (scroll < 300) {
          $('.menu__item--current').removeClass('menu__item--current');
          $('.link1').addClass('menu__item--current');
        }
        else if (scroll > page2 && scroll < (page3 - 400)) { 
          $('.menu__item--current').removeClass('menu__item--current');
          $('.link2').addClass('menu__item--current');
        } 
        else if (scroll > page3 && scroll < (page3 + 400)) {
          $('.menu__item--current').removeClass('menu__item--current');
          $('.link3').addClass('menu__item--current');
        }
      });
     });
  })();

  // ***** Animates page objects on trigger div and scroll position ***** //
  var trigger = $('.trigger').offset().top;
  var header = $(".clear-header");
  var caveRoof = $(".projects-layer-4");

  $(window).scroll(function(){
    var elem = $('.page-cycle');
    setTimeout(function() {
       elem.css({"opacity":"1","transition":"1.3s"}); 
    },1000);            
        elem.css({"opacity":"0","transition":"0.3s"});

    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      caveRoof.addClass('show-elem');
      header.removeClass("clear-header").addClass('transparent-header');
    } else {
      header.removeClass("transparent-header").addClass('clear-header');
    }

    if ($(this).scrollTop() > trigger){ 
      $('.segment-header').removeClass('lightSpeedOut').addClass('lightSpeedIn');
      $('.photo-holder').removeClass('lightSpeedOut').addClass('bounceIn');
      $('.info').removeClass('lightSpeedOut').addClass('lightSpeedIn'); 
    }
  });
});
