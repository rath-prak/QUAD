// Animated Typography - text slide
	const textSlide = {
		 // animate text
		fadeInText: (section) => {
			TweenMax.staggerTo(section, 1 , {
	      y: 0,
	      autoAlpha: 1,
	      ease: Back.easeInOut,
	    }, 0.2);
		},
		// reset fading text fucntion to original postion when leave section.
		resetfadeText: (section, opacity, yPos, time) => {
			TweenMax.set(section, {
	      alpha: opacity,
	      y: yPos,
	      delay: time,
	    });
		},

	};

export default textSlide;
