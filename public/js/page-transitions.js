$(document).load().scrollTop(0);

$(document).ready(function(){  
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
          loader.show();

          setTimeout(function(){
            loader.hide();

            // multibrowser fix for ev.srcElement
            var clickObj = getTarget(ev);
            pages.forEach(function(page){
              pageID = '#' + page.id;
              parentHash = $(clickObj.hash).selector;
              if (pageID == parentHash)  {
                currentPage = i;
              }
              i++;

              //if hash or parent hash match, show class
              if (parentHash == pageID) {
                i = currentPage;
                classie.addClass(page, 'show');  

                // Ensure project pages always load at top
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
              } else if (classie.hasClass(page, 'show')){
                classie.removeClass(page, 'show');
              } 
            });
          },3000);
        });
      }); 

      // ****** Go back to the Index view ******* //
      triggerBack.forEach(function(triggerBack){
        triggerBack.addEventListener('click', function(ev){
          loader.show();

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
            $('html, body').animate({
              scrollTop: $("#projects").offset().top
            }, 0000);

          },3000);
        });
      });

      // ****** Cycle through the project pages ******* //
      triggerCycle.forEach(function(triggerCycle){
        triggerCycle.addEventListener('click', function(ev){
          i = 0;
          loader.show();
          setTimeout( function() {
            loader.hide();

            // multibrowser fix for ev.srcElement
            var clickObj = getTarget(ev);

            pages.forEach(function(page) {
              pageID = '#' + page.id;
              if (classie.hasClass(page, 'show')){
                classie.removeClass( page, 'show' );
              }
            });

            if ((clickObj.className == "next-btn") || (clickObj.className == "pageload-cycle next-trigger")) {
              var nextPage = currentPage + 1;
              if (nextPage > 4) {
                nextPage = 2;
              }
              currentPage = nextPage
              classie.addClass(pages[nextPage], 'show');
            } else if ((clickObj.className == "prev-btn") || (clickObj.className == "pageload-cycle prev-trigger")) {
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
          },3000);
        });
      });
    }init();
  })();
});



// Browser fix for src.Element
function getTarget(obj) {
  var targ;
  var e = obj;

  if (e.target) {
    targ = e.target;

  } else if (e.srcElement) { 
    targ = e.srcElement; 
  }

  if (targ.nodeType == 3) { // Safari bug fix
      targ = targ.parentNode;
  }
  return targ;
}