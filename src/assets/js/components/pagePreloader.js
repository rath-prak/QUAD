import Vivus from 'vivus';

const pagePreloader = {
  background: () => {
    const preloader = $('.preload-wrapper');
    TweenMax.to(preloader, 2, {
      autoAlpha: 0,
      ease: Back.easeIn.config(1.7),
    });
  },
  preloader: () => {
    var preloader = new Vivus('qsol-logo-outline',{
      type: 'delayed',
      duration: 200,
      animTimingFunction: Vivus.EASE,
    });
  }
}

export default pagePreloader;
