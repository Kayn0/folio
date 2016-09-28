
$(document).ready(function(){
  (function () {
    window.addEventListener('scroll', function (event) {
      var depth, i, layer, layers, len, yMovement, topDistance, translate3d;
      var pDepth, j, projectLayer, projectLayers, pLen, movement;

      topDistance = this.pageYOffset;
      layers = document.querySelectorAll('[data-type=\'parallax\']');

      projectLayers = document.querySelectorAll('[data-type=\'project-parallax\']');
      
      var scroll = $(window).scrollTop();
      
        for (j = 0, pLen = projectLayers.length; j < pLen; j++) {  
          projectLayer = projectLayers[j];
          pDepth = projectLayer.getAttribute('data-depth');
          movement = -(topDistance * pDepth) + 1700;
          translate3d = 'translate3d(0, ' + movement + 'px, 0)';
          projectLayer.style['-webkit-transform'] = translate3d;
          projectLayer.style['-moz-transform'] = translate3d;
          projectLayer.style['-ms-transform'] = translate3d;
          projectLayer.style['-o-transform'] = translate3d;
          projectLayer.style.transform = translate3d;
        }
      

      for (i = 0, len = layers.length; i < len; i++) {      
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        yMovement = -(topDistance * depth);
        translate3d = 'translate3d(0, ' + yMovement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
      }
    });
  }.call(this));  
});
