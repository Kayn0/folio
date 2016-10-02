$(document).ready(function(){
  $(window).scrollTop(0);

  setTimeout(function(){
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 3000);

  //Page transitions
  (function() {
    var pageWrap = document.getElementById('pagewrap'),
      pages = [].slice.call(pageWrap.querySelectorAll('div.container')),
      currentPage = 0,
      triggerLoading = [].slice.call(pageWrap.querySelectorAll('a.pageload-link')),
      triggerBack = [].slice.call(pageWrap.querySelectorAll('a.pageload-back')),
      triggerCycle = [].slice.call(pageWrap.querySelectorAll('a.pageload-cycle')),
      loader = new SVGLoader(document.getElementById('loader'), {speedIn : 200, easingIn : mina.linear});
      var i = 0;

    function init(){
      triggerLoading.forEach(function(trigger){
        trigger.addEventListener('click', function(ev){
          // ev.preventDefault();
          loader.show();
          // after some time hide loader
          setTimeout(function(){
            loader.hide();
            pages.forEach(function(page){
              pageID = '#' + page.id;
              parentHash = $(ev.srcElement.hash).selector;
              parentPath = ev.srcElement.parentElement.hash;
              if (pageID == parentHash)  {
                currentPage = i;
              }
              i++;

              //if hash or parent hash match, show class
              if ((ev.srcElement.hash == pageID) || (parentHash == pageID)) {
                i = currentPage;
                classie.addClass(page, 'show');               
                // fix to ensure project pages load at top
                if (pageID == "#project-atlas") {
                  $('html, body').animate({
                    scrollTop: $("#project-atlas").offset().top
                  }, 0);
                } else if (pageID == "#project-abc") {
                  $('html, body').animate({
                    scrollTop: $("#project-abc").offset().top
                  }, 0);
                } else if (pageID == "#project-ccp") {
                  $('html, body').animate({
                    scrollTop: $("#project-ccp").offset().top
                  }, 0);
                }
              }
              else if (classie.hasClass(page, 'show')){
                classie.removeClass(page, 'show');
              } 
            });
          },2000);
        });
      }); 

      triggerBack.forEach(function(triggerBack){
        triggerBack.addEventListener('click', function(ev){
          // ev.preventDefault();
          loader.show();
          // after some time hide loader
          setTimeout( function() {
            loader.hide();
            pages.forEach(function(page) {
              pageID = '#' + page.id;
              if (classie.hasClass(page, 'show')){
                classie.removeClass( page, 'show' );
              }
            });
            classie.addClass(pages[0], 'show');
            classie.addClass(pages[1], 'show');
            $("html, body").animate({ scrollTop: 0 }, "fast");
          },2000);
        });
      });

      triggerCycle.forEach(function(triggerCycle){
        triggerCycle.addEventListener('click', function(ev){
          i = 0;
          // ev.preventDefault();
          loader.show();
          // after some time hide loader
          setTimeout( function() {
            loader.hide();
            pages.forEach(function(page) {
              pageID = '#' + page.id;
              if (classie.hasClass(page, 'show')){
                classie.removeClass( page, 'show' );
              }
            });

            if (ev.srcElement.className == "next-btn") {
              var nextPage = currentPage + 1;
              if (nextPage > 4) {
                nextPage = 2;
              }
              currentPage = nextPage
              classie.addClass(pages[nextPage], 'show');
            } else if (ev.srcElement.className == "prev-btn") {
              var prevPage = currentPage - 1;
              if (prevPage < 2) {
                prevPage = 4;
              }
              currentPage = prevPage
              classie.addClass(pages[prevPage], 'show');
            }

            // ensure projects pages always load at top
            $('html, body').animate({
              scrollTop: $("#project-ccp").offset().top
            }, 0),

            $('html, body').animate({
              scrollTop: $("#project-atlas").offset().top
            }, 0),

            $('html, body').animate({
              scrollTop: $("#project-abc").offset().top
            }, 0);
          },2000);
        });
      });
    }init();
  })();
                                        
  // smooth scroll 
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
     
  //Navigation link: click and hover effect               
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
        else if (scroll < page2) {
          $('.menu__item--current').removeClass('menu__item--current');
          $('.link1').addClass('menu__item--current');
        }
        else if (scroll > page2 && scroll < (page2 + 200)) { 
          $('.menu__item--current').removeClass('menu__item--current');
          $('.link2').addClass('menu__item--current');
        } 
        else if (scroll > page3 && scroll < (page3 + 200)) {
          $('.menu__item--current').removeClass('menu__item--current');
          $('.link3').addClass('menu__item--current');
        }
      });
     });
  })();

  //Animates page objects on trigger div and scroll position.
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
    if (scroll >= 500) {
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
