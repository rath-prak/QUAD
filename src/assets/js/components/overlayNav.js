const overlayNav = () => {

  let $overlayNav = $('.overlay-nav');
  let $toggleMenu = $('.toggle-menu');
  let $toggleOverlay = $('.toggle-overlay');
  let $menuWorkplace = $('#workplace-training');
  let $menuBusSupport = $('#bus-support');
  let $events= $('#events');

  $toggleMenu.on('click', function() {
    $('.bar').toggleClass('animate');
  });

  const tl = new TimelineMax({ delay:6, paused:true, reversed:true })
  tl.to($overlayNav, 1, { y: '0%', ease: Power2.easeOut })

  let slide = () => {
    setTimeout(function(){
        tl.reversed() ? tl.restart() : tl.reverse();
      }, 600);
  }

  $toggleMenu.on('click', () => {
      slide();
  })

  $menuWorkplace.on('click', function(){
    $('.bar').toggleClass('animate');
    slide();
  	$.fn.pagepiling.moveTo(3);
  });

  $menuBusSupport.on('click', function(){
    $('.bar').toggleClass('animate');
    slide();
    $.fn.pagepiling.moveTo(4);
  });

  $events.on('click', function(){
    $('.bar').toggleClass('animate');
    slide();
    $.fn.pagepiling.moveTo(5);
  });


}

export default overlayNav;
