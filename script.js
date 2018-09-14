/*
 * Slideshow v1
 * by Mustafa Haidari
 *
 * Copyright (c) 2018 Mustafa Haidari
 * Released under the MIT license
 * https://github.com/Mustafa-Haidari/slideshow-JS/blob/master/LICENSE
 *
 */




var myIndex = 0;

var slider = function() {
	var x = document.querySelectorAll(".slide");
	var month = document.querySelectorAll(".month");

	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		x[myIndex].style.display = "block";
		month[myIndex].style.backgroundColor = '#ff751a';
		month[myIndex].style.color = '#fff';			
	}




	// next
	var next = document.querySelector('.next');

	if (window.addEventListener) {
		next.addEventListener('click', function() {
			myIndex++;
			nextPrev();
		});
	} else if (window.attachEvent) {
		next.attachEvent('onclick', function() {
			myIndex++;
			nextPrev();
		});
	}


	// prev
	var prev = document.querySelector('.prev');

	if (window.addEventListener) {
		prev.addEventListener('click', function() {
			myIndex--;
			nextPrev();
		});
	} else if (window.attachEvent) {
		prev.attachEvent('onclick', function() {
			myIndex--;
			nextPrev();
		});
	}



	function nextPrev() {
		if (myIndex > x.length - 1) {
			myIndex = 0
		}
		if (myIndex < 0) {
			myIndex = x.length - 1
		}
		for (var i = 0; i < x.length; i++) {
			x[i].style.display = "none";
			x[myIndex].style.display = "block";
		}
		for (var i = 0; i < month.length; i++) {
			month[i].style.backgroundColor = '#ffcc99';
			month[i].style.color = '#333';
			month[myIndex].style.backgroundColor = '#ff751a';
			month[myIndex].style.color = '#fff';
		}
	}





	for (var monthIdx = 0; monthIdx < month.length; monthIdx++) {
		if (window.addEventListener) {
			month[monthIdx].addEventListener('click', function(e) {
				var monthId = e.target.id - 1;
				myIndex = monthId;
				for (var slideIdx = 0; slideIdx < x.length; slideIdx++) {
					x[slideIdx].style.display = "none";
					month[slideIdx].style.backgroundColor = '#ffcc99';
					month[slideIdx].style.color = '#333';
				}
				x[myIndex].style.display = "block";
				month[myIndex].style.backgroundColor = '#ff751a';
				month[myIndex].style.color = '#fff';
			});
		}
		if (window.attachEvent) {
			month[monthIdx].attachEvent('onclick', function(e) {
				var monthId = e.srcElement.id - 1;
				myIndex = monthId;
				for (var slideIdx = 0; slideIdx < x.length; slideIdx++) {
					x[slideIdx].style.display = "none";
					month[slideIdx].style.backgroundColor = '#ffcc99';
					month[slideIdx].style.color = '#333';
				}
				x[myIndex].style.display = "block";
				month[myIndex].style.backgroundColor = '#ff751a';
				month[myIndex].style.color = '#fff';
			});
		}
	}

}();
