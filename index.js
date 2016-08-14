(function(){
	'use strict';

	var want = [],
		seen = [];

	new Audio('http://soundjax.com/reddo/40725%5EDING1.mp3');

	function checkForNew() {
		document.querySelectorAll('.collection-item').forEach(function(item){
			var reactid = item.dataset.reactid;

			if (seen.indexOf(reactid) > -1) return;

			if (want.indexOf(item.querySelector('span.title').textContent) > -1) {
				item.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
				var link = item.querySelector('a[href*="pokesniper2:"]');

				link.onclick = function(){
					item.style.backgroundColor = 'rgba(0, 8, 255, 0.2)';
				};

				var audio = new Audio('http://soundjax.com/reddo/40725%5EDING1.mp3');
				audio.play();
			}

			seen.push(reactid);
		});

	}

	function setupList(e, x, y, z){
		e.preventDefault();
		
		document.querySelector('form textarea.list-area').value.split(',').forEach(function(x){
			want.push(x.trim());
		});

		document.querySelector('.bground-removeme').remove();

		setInterval(function(){
			checkForNew();
		}, 1000);
	}

	function init(){
		var bground = document.createElement('div'),
			form = document.createElement('div');

		bground.classList.add('bground-removeme');
		bground.style.position = 'fixed';
		bground.style.top = '0';
		bground.style.left = '0';
		bground.style.width = '100%';
		bground.style.height = '100%';
		bground.style.backgroundColor = ('rgba(100, 100, 100, 0.6)');
		bground.style.zIndex = '99999';

		form.style.backgroundColor = 'white';
		form.style.padding = '5px';
		form.style.display = 'inline-block';
		form.style.position = 'absolute';
		form.style.top = '45%';
		form.style.left = '45%';

		form.innerHTML = "<form><textarea class='list-area' placeholder='comma separated list of pokemon names'></textarea><input type='submit'></input></form>";
		form.querySelector('form').onsubmit = setupList;

		document.body.appendChild(bground);
		bground.appendChild(form);
	}

	init();
})();