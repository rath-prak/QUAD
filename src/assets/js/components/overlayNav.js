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
  tl.to($overlayNav, 0.8, { y: '0%', ease: Power2.easeOut })

  let slide = () => {
    setTimeout(function(){
        tl.reversed() ? tl.restart() : tl.reverse();
      }, 400);
  }

  $toggleMenu.on('click', () => {
      slide();
  })

  $('.menu-link').on('click', () => {
      tl.reverse();
      $('.bar').removeClass('animate');
  })


}

export default overlayNav;
