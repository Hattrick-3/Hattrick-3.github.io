$(function(){
  var h_section1 = $('.first').height();
  var h_section2 = $('.third').height();

  var h = h_section1+h_section2+70;
  $('.bg').height(h);
  $('.bg2').height(h);


  var bg_white = $('.bg2');
  var bg_state = null;
  var scroll_blue = h_section1-300;
  var scroll_white = h_section1;

  $(window).scroll(function() {
    
    var scroll_current = $(this).scrollTop();
    if (scroll_current < scroll_blue) {
      if (bg_state != 'blue') {
        bg_state = 'blue';
        bg_white.stop().animate({
          opacity: 0
        });
      }
    } else if (scroll_current > scroll_blue) {
      if (bg_state != 'white') {
        bg_state = 'white';
        bg_white.stop().animate({
          opacity: 1
        });
      }
    } else {
      bg_state = null;
      bg_white.animate({
        opacity: (scroll_current - scroll_blue) /(scroll_white - scroll_blue)
      });
    }
  });
    
  $(window).on("scroll", function() {
  		  var w_header = $(".header").width();
        if($(window).scrollTop() > 0) {
            $(".header").css('background','#0D0D5B');
  
        } else {
           $(".header").css('background','#266AA0');
        }
       
          	$.jInvertScroll(['.numbers'])
           
    });
  var block1 = $(".block1");
  var block2 = $(".block2");
  var block3 = $(".block3");
  var block4 = $(".block4");
  var block5 = $(".block5");
  var block6 = $(".block6");
  var block7 = $(".block7");
  var block8 = $(".block8");
  var timer;
  block1.on("mouseover", function(){
    timer=setTimeout(function(){
      block2.addClass("mouse")
    block3.addClass("mouse")
    block4.addClass("mouse")
    block5.addClass("mouse")
    block6.addClass("mouse")
    block7.addClass("mouse")
    block8.addClass("mouse")
  },200)
  	
  	
  })
  block1.on("mouseout", function(){
    timer=setTimeout(function(){
  	block2.removeClass("mouse")
  	block3.removeClass("mouse")
  	block4.removeClass("mouse")
  	block5.removeClass("mouse")
  	block6.removeClass("mouse")
  	block7.removeClass("mouse")
  	block8.removeClass("mouse")
  },200)

  })
  block2.on("mouseover", function(){
    timer=setTimeout(function(){
  	block1.addClass("mouse")
  	block3.addClass("mouse")
  	block4.addClass("mouse")
  	block5.addClass("mouse")
  	block6.addClass("mouse")
  	block7.addClass("mouse")
  	block8.addClass("mouse")
  	  },200)
  })
  block2.on("mouseout", function(){
     timer=setTimeout(function(){
  	block1.removeClass("mouse")
  	block3.removeClass("mouse")
  	block4.removeClass("mouse")
  	block5.removeClass("mouse")
  	block6.removeClass("mouse")
  	block7.removeClass("mouse")
  	block8.removeClass("mouse")
        },200)

  })
  block3.on("mouseover", function(){
     timer=setTimeout(function(){
  	block2.addClass("mouse")
  	block1.addClass("mouse")
  	block4.addClass("mouse")
  	block5.addClass("mouse")
  	block6.addClass("mouse")
  	block7.addClass("mouse")
  	block8.addClass("mouse")
        },200)
  	
  })
  block3.on("mouseout", function(){
     timer=setTimeout(function(){
  	block2.removeClass("mouse")
  	block1.removeClass("mouse")
  	block4.removeClass("mouse")
  	block5.removeClass("mouse")
  	block6.removeClass("mouse")
  	block7.removeClass("mouse")
  	block8.removeClass("mouse")
        },200)

  })
  block4.on("mouseover", function(){
     timer=setTimeout(function(){
  	block2.addClass("mouse")
  	block3.addClass("mouse")
  	block1.addClass("mouse")
  	block5.addClass("mouse")
  	block6.addClass("mouse")
  	block7.addClass("mouse")
  	block8.addClass("mouse")
        },200)
  	
  })
  block4.on("mouseout", function(){
     timer=setTimeout(function(){
  	block2.removeClass("mouse")
  	block3.removeClass("mouse")
  	block1.removeClass("mouse")
  	block5.removeClass("mouse")
  	block6.removeClass("mouse")
  	block7.removeClass("mouse")
  	block8.removeClass("mouse")
        },200)

  })
  block5.on("mouseover", function(){
     timer=setTimeout(function(){
  	block2.addClass("mouse")
  	block3.addClass("mouse")
  	block4.addClass("mouse")
  	block1.addClass("mouse")
  	block6.addClass("mouse")
  	block7.addClass("mouse")
  	block8.addClass("mouse")
        },200)
  	
  })
  block5.on("mouseout", function(){
     timer=setTimeout(function(){
  	block2.removeClass("mouse")
  	block3.removeClass("mouse")
  	block4.removeClass("mouse")
  	block1.removeClass("mouse")
  	block6.removeClass("mouse")
  	block7.removeClass("mouse")
  	block8.removeClass("mouse")
        },200)

  })
  block6.on("mouseover", function(){
     timer=setTimeout(function(){
  	block2.addClass("mouse")
  	block3.addClass("mouse")
  	block4.addClass("mouse")
  	block5.addClass("mouse")
  	block1.addClass("mouse")
  	block7.addClass("mouse")
  	block8.addClass("mouse")
        },200)
  	
  })
  block6.on("mouseout", function(){
     timer=setTimeout(function(){
  	block2.removeClass("mouse")
  	block3.removeClass("mouse")
  	block4.removeClass("mouse")
  	block5.removeClass("mouse")
  	block1.removeClass("mouse")
  	block7.removeClass("mouse")
  	block8.removeClass("mouse")
        },200)

  })
  block7.on("mouseover", function(){
     timer=setTimeout(function(){
  	block2.addClass("mouse")
  	block3.addClass("mouse")
  	block4.addClass("mouse")
  	block5.addClass("mouse")
  	block6.addClass("mouse")
  	block1.addClass("mouse")
  	block8.addClass("mouse")
        },200)
  	
  })
  block7.on("mouseout", function(){
     timer=setTimeout(function(){
  	block2.removeClass("mouse")
  	block3.removeClass("mouse")
  	block4.removeClass("mouse")
  	block5.removeClass("mouse")
  	block6.removeClass("mouse")
  	block1.removeClass("mouse")
  	block8.removeClass("mouse")
        },200)

  })
   block8.on("mouseover", function(){
     timer=setTimeout(function(){
  	block2.addClass("mouse")
  	block3.addClass("mouse")
  	block4.addClass("mouse")
  	block5.addClass("mouse")
  	block6.addClass("mouse")
  	block7.addClass("mouse")
  	block1.addClass("mouse")
        },200)
  	
  })
  block8.on("mouseout", function(){
     timer=setTimeout(function(){
  	block2.removeClass("mouse")
  	block3.removeClass("mouse")
  	block4.removeClass("mouse")
  	block5.removeClass("mouse")
  	block6.removeClass("mouse")
  	block7.removeClass("mouse")
  	block1.removeClass("mouse")
        },200)

  })
});


(function($) {
    $.jInvertScroll = function(sel, options) {
        var defaults = {
            width: 'auto',		    // The horizontal container width
            height: 'auto',		    // How far the user can scroll down (shorter distance = faster scrolling)
            onScroll: function(percent) {  // Callback fired when the user scrolls down, the percentage of how far the user has scrolled down gets passed as parameter (format: 0.xxxx - 1.0000)
                // do whatever you like
            }
        };
        
        var config = $.extend(defaults, options);
        
        if(typeof sel === 'Object' && sel.length > 0) {
            return;
        }
        
        var elements = [];
        var longest = 0;
        
        // Extract all selected elements from dom and save them into an array
        $.each(sel, function(i, val) {
            $(val).each(function(e) {
                var tmp = {
                    width: $(this).width(),
                    height: $(this).height(),
                    el: $(this)
                }
                
                elements.push(tmp);
                
                if(longest < tmp.width) {
                    longest = tmp.width;
                }
            });
        });
        
        // Use the longest elements width + height if set to auto
        if(config.width == 'auto') {
            config.width = longest;
        }
        
        if(config.height == 'auto') {
            config.height = longest;
        }
        
        // Set the body to the selected height
        $('body').css('height', config.height+'px');
        
        // Listen for the actual scroll event
        $(window).on('scroll resize', function(e) {
            var currY = $(this).scrollTop();
            var totalHeight = $(document).height();
            var winHeight = $(this).height();
            var winWidth = $(this).width();
            
            // Current percentual position
            var scrollPercent = (currY / (totalHeight - winHeight)).toFixed(4);
            
            // Call the onScroll callback
            if(typeof config.onScroll === 'function') {
                config.onScroll.call(this, scrollPercent);
            }
            
            // do the position calculation for each element
            $.each(elements, function(i, el) {
                var pos = Math.floor(12.5*(el.width - winWidth) * scrollPercent) * 1;
                el.el.css('left', pos);
            });
        });
    };
}(jQuery));