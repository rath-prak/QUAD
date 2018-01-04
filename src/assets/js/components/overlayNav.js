const overlayNav = () => {

  let $overlayNav = $('.overlay-nav');
  let $hamburgerMenu = $('.hamburger-menu');

  $hamburgerMenu.on('click', function() {
    $('.bar').toggleClass('animate');
  });

  const tl = new TimelineMax({ paused:true, reversed:true })
  tl.to($overlayNav, 1, { y: '0%', ease: Power2.easeOut })

  $hamburgerMenu.on('click', () => {
    tl.reversed() ? tl.restart() : tl.reverse();
  })
}

export default overlayNav;
