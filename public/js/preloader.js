window.onload = function() {

  setTimeout(function() {
    // preload images
    new Image().src = "../img/tree.png";
    new Image().src = "../img/clouds.png";

    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }, 1000);
};
