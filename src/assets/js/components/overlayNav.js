const overlayNav = () => {

  let $overlayNav = $('.overlay-nav');
  let $toggleMenu = $('.toggle-menu');
  let $toggleOverlay = $('.toggle-overlay');

  $toggleMenu.on('click', function() {
    $('.bar').toggleClass('animate');
  });

  const tl = new TimelineMax({ delay:6, paused:true, reversed:true })
  tl.to($overlayNav, 1, { y: '0%', ease: Power2.easeOut })

  $toggleMenu.on('click', () => {
    setTimeout(function(){
        tl.reversed() ? tl.restart() : tl.reverse();
      }, 400);
  })
}

export default overlayNav;
