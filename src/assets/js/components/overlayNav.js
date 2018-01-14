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

  $toggleMenu.on('click', () => {
    setTimeout(function(){
        tl.reversed() ? tl.restart() : tl.reverse();
      }, 600);
  })

  $menuWorkplace.on('click', function(){
    tl.reversed() ? tl.restart() : tl.reverse();
  	$.fn.pagepiling.moveTo(3);
  });

  $menuBusSupport.on('click', function(){
    tl.reversed() ? tl.restart() : tl.reverse();
    $.fn.pagepiling.moveTo(4);
  });

  $events.on('click', function(){
    tl.reversed() ? tl.restart() : tl.reverse();
    $.fn.pagepiling.moveTo(5);
  });


}

export default overlayNav;
