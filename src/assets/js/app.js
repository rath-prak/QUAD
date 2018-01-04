// import $ from 'jquery';
import whatInput from 'what-input';
import {TweenMax, Power2, TimelineLite} from "gsap";
import overlayNav from './components/overlayNav';
// window.$ = $;



import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).ready(function() {

	// Full screen overlay menu
	overlayNav();

	// pagepiling
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
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
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
				onLeave: function(anchorLink, index){
					if (index === 1) {
						$('.logo-white').addClass('active');
						$('.logo-black').removeClass('active');
				 	} else {
						$('.logo-black').addClass('active');
						$('.logo-white').removeClass('active');
					}
				},

	});


});
// $(document).foundation();
