//video
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//nawigacja i hamburger
	(function() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
		e.preventDefault();
		this.navToggle.classList.toggle('expanded');
		this.nav.classList.toggle('expanded');
			}
		};

		hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

	}());
