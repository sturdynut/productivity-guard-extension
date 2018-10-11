chrome.extension.sendMessage({}, function(response) {
	console.info('Productivity Guard', '<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>');

	const unproductiveSites = [
		'www.facebook.com',
		'facebook.com',
		'www.twitter.com',
		'twitter.com',
		'www.linkedin.com',
		'linkedin.com',
		'www.reddit.com',
		'reddit.com',
		'www.youtube.com',
		'youtube.com',
		'www.thisiswhyimbroke.com',
		'thisiswhyimbroke.com',
		'www.aliexpress.com',
		'aliexpress.com',
		'www.clickhole.com',
		'clickhole.com',
		'www.theonion.com',
		'theonion.com',
	];

	const curr = window.location.hostname;
	if (unproductiveSites.includes(curr)) {
		var el = document.createElement('div');
		el.style.position = 'absolute';
		el.style.top = 0;
		el.style.right = 0;
		el.style.bottom = 0;
		el.style.left = 0;
		el.style.backgroundColor = '#000';
		el.style.color = '#fff';
		el.style.textAlign = 'center';
		el.style.height = '100vh';
		el.style.width = '100%';
		el.style.display = 'flex';
		el.style.alignItems = 'center';
		el.style.justifyContent = 'center';
		el.style.zIndex = 1000000;
		el.innerText = '⚔️  Nope!  Now, get back to work! ⚔️ ';
		el.style.fontFamily = 'monospace';
		el.style.fontSize = '80px';
		el.style.letterSpacing = '-9px';
		el.style.wordSpacing = '-35px';

		document.body.appendChild(el);
	}
});