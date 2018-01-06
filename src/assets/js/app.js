// import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax, Power2, TimelineLite} from "gsap";
import overlayNav from './components/overlayNav';

import textSlide from './components/textSlide.js';

// window.$ = $;



import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).ready(function() {

	const $workplaceTextSlide = $('.workplace-textslide');

	// Full screen overlay menu
	overlayNav();

	// pagepiling
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: 'pp-scrollable',
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
				afterLoad: (anchorLink, index) => {
					//change color of logo for different sections
					if (index === 1 || index === 6) {
						$('.logo-white').addClass('active');
						$('.logo-black').removeClass('active');
				 	} else {
						$('.logo-black').addClass('active');
						$('.logo-white').removeClass('active');
					};

					//Fade in text animation
					if ( index === 3 ) {
						textSlide.fadeInText($workplaceTextSlide);
					};
				},
				onLeave: (index, nextIndex, direction) => {
	     		if (index === 3 && direction === 'up' || index === 3 && direction === 'down') {
	       	 textSlide.resetfadeText($workplaceTextSlide, 0, 20, 1);
	      	}
    		},
	});
	// end of page pilling

	// set strate
	const setState = () => {
		TweenMax.set([$workplaceTextSlide], {
			alpha: 0,
			y: 30,
		});
	};
	setState();


});
// $(document).foundation();
