$.fn.pintro = function(options) {

  this.each(function() {
  var defaults = {
      imgGroup: $(this),
      imgClass: '.thumb',
      imgInfoClass: '.info',
      duration : 'fast'
  };

  var thumbcss = {
      float: 'left',
      margin: "10px 5px",
      position: 'relative'     
  };
 
  var infocss = {
        position: 'absolute',
        bottom: '0px',
        left: '0px',
        width: '100%',
        'padding': '10px',
        'background-color': '#27709b',
        color: 'white',
        'font-size': '12px',        
        'text-align': 'left',
        'line-height': '1.2',
        display: 'none'
  };
    
  var settings = $.extend({}, defaults, options);
  var icss = $.extend({}, infocss, settings.infocss);
  var info = $(this).find(settings.imgInfoClass);
  info.css(icss);
    
  var tcss = $.extend({}, thumbcss, settings.thumbcss);
  var thumb = $(this).find(settings.imgClass);
  thumb.css(tcss);
    
  var up = function(){
  $(this).find(settings.imgInfoClass)
    .css('max-width', $(this)[0].offsetWidth )
    .stop(true,true)
    .slideDown(settings.duration);  
  };

  var down = function(){
    $(this).find(settings.imgInfoClass)
    .stop(true,true)
    .slideUp(settings.duration);
  };

    settings.imgGroup.on('mouseenter', settings.imgClass , up);
    settings.imgGroup.on('mouseleave', settings.imgClass, down);
    settings.imgGroup.find(settings.imgClass).on('show.all', up);
  });
};
