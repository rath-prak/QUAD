// import $ from 'jquery';
import whatInput from 'what-input';
import { TweenMax, Power2, TimelineLite } from "gsap";

import pagePilingSection from './components/pagePilingSection';
import overlayNav from './components/overlayNav';
import hoverUnderline from './components/hoverUnderline';
import scrollToTop from './components/scrollToTop';

// window.$ = $;

// import Foundation from 'foundation-sites';

$(document).ready(function() {

	hoverUnderline();
  scrollToTop();
  overlayNav();
  pagePilingSection();


});
// $(document).foundation();
