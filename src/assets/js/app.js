// import $ from 'jquery';
import whatInput from 'what-input';
import { TweenMax, Power2, TimelineLite } from "gsap";
import overlayNav from './components/overlayNav';

import fadeUp from './components/fadeUp.js';

// window.$ = $;



import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).ready(function() {

	let $workplacefadeUp = $('.workplace-fadeUp');
	let $busSupportfadeUp = $('.busSupport-fadeUp');
	let $eventsfadeUp = $('.events-fadeUp');


	// Move down one section
	$('.solution-arrow').on('click', () => {
			$.fn.pagepiling.moveSectionDown();
	});

	// Full screen overlay menu
	overlayNav();

	// pagepiling
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: "pp-scrollable",
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

					if ( index === 1 ) {
						$('#pp-nav').removeClass('pp-nav-show');
					}

					if ( index === 2 ) {
						$('#pp-nav').addClass('pp-nav-show');
				 	}

					//Fade in text animation
					if ( index === 3 ) {
						fadeUp.fadeInText($workplacefadeUp);
						$('#pp-nav').addClass('pp-nav-show');
					};

					if ( index === 4 ) {
						fadeUp.fadeInText($busSupportfadeUp);
					}

					if ( index === 5 ) {
						fadeUp.fadeInText($eventsfadeUp);
					}

				},
				onLeave: (index, nextIndex, direction) => {

	     		if (index === 3 && direction === 'up' || index === 3 && direction === 'down') {
	       	 fadeUp.resetfadeText($workplacefadeUp, 0, 20, 1);
					};

				  if (index === 4 && direction === 'up' || index === 4 && direction === 'down') {
				 	  fadeUp.resetfadeText($busSupportfadeUp, 0, 20, 1);
				 	};

					if (index === 5 && direction === 'up' || index === 5 && direction === 'down') {
						fadeUp.resetfadeText($eventsfadeUp, 0, 20, 1);
					};

    		},
	});
	// end of page pilling

	// set strate
	const setState = () => {
		TweenMax.set([$workplacefadeUp, $busSupportfadeUp, $eventsfadeUp], {
			alpha: 0,
			y: 30,
		});
	};
	setState();


});
// $(document).foundation();
