document.addEventListener('DOMContentLoaded',function(){
	var bgImg = document.createElement('img');
	bgImg.src = 'https://images.unsplash.com/photo-1493585552824-131927c85da2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
	var headerBg = document.getElementById('headerBg');
	var caption = document.getElementById('caption');
	bgImg.addEventListener('load',function(){
		headerBg.style.backgroundImage = 'url(https://images.unsplash.com/photo-1493585552824-131927c85da2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)';
		headerBg.style.opacity = 1;
		caption.style.opacity = 1;
	})
})