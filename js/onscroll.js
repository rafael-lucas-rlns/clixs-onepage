

window.onscroll = function() {onScroll()};

function onScroll() {
	const mouseroll = document.querySelector(".i-mouseroll img");
	
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		mouseroll.classList.add('hidden');
	} else {
		mouseroll.classList.remove('hidden');
	}
}
