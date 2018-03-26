import { TweenMax, Power2, TimelineLite } from "gsap";
import fadeUp from './fadeUp';

const pagePilingSection = () => {
  let $workplacefadeUp = $('.workplace-fadeUp');
  let $busSupportfadeUp = $('.busSupport-fadeUp');
  let $eventsfadeUp = $('.events-fadeUp');

  // Move down one section
  $('.solution-arrow').on('click', () => {
    $.fn.fullpage.moveSectionDown();
  });

  // Contact-footer, move to footer
  $('.landing-contact').on('click', () => {
    $.fn.fullpage.moveTo(7);
  });

  // back to top button
  $('.back-to-top-btn').on('click', () => {
    $.fn.fullpage.moveTo(1);
  });

  // pagepiling
  $('#fullpage').fullpage({
      // menu: null,
      //   direction: 'vertical',
      //   verticalCentered: "pp-scrollable",
      //   anchors: [],
      //   scrollingSpeed: 700,
      //   easing: 'swing',
      //   loopBottom: false,
      //   loopTop: false,
      //   css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': []
        },
      //   normalScrollElements: 'pp-scrollable',
      //   normalScrollElementTouchThreshold: 5,
      //   touchSensitivity: 20,
      //   keyboardScrolling: true,
      //   sectionSelector: '.section',
      //   animateAnchor: false,
        afterLoad: (anchorLink, index) => {

          if ( index === 1 ) {
            $('#fp-nav').removeClass('fp-nav-show');
          }

          if ( index === 2 ) {
            $('#fp-nav').addClass('fp-nav-show');
          }

          //Fade in text animation
          if ( index === 3 ) {
            fadeUp.fadeInText($busSupportfadeUp);
            $('#pp-nav').addClass('pp-nav-show');
          };

          if ( index === 4 ) {
            fadeUp.fadeInText($eventsfadeUp);
            $('#pp-nav').addClass('pp-nav-show');
          }

          if ( index === 5 ) {
            fadeUp.fadeInText($workplacefadeUp);
            $('#pp-nav').addClass('pp-nav-show');
          }

          if ( index === 6 ) {
            $('#pp-nav').removeClass('pp-nav-show');
          }

          if ( index === 7 ) {
            $('#pp-nav').removeClass('pp-nav-show');
          }

        },
        onLeave: (index, nextIndex, direction) => {

          if (index === 3 && direction === 'up' || index === 3 && direction === 'down') {
           fadeUp.resetfadeText($busSupportfadeUp, 0, 20, 1);
          };

          if (index === 4 && direction === 'up' || index === 4 && direction === 'down') {
            fadeUp.resetfadeText($eventsfadeUp, 0, 20, 1);
          };

          if (index === 5 && direction === 'up' || index === 5 && direction === 'down') {
            fadeUp.resetfadeText($workplacefadeUp, 0, 20, 1);
          };

        },
  });
  // end of page pilling

  // set strate
  const setState = () => {
    TweenMax.set([$busSupportfadeUp, $eventsfadeUp, $workplacefadeUp], {
      alpha: 0,
      y: 30,
    });
  };
  setState();
}

export default pagePilingSection
