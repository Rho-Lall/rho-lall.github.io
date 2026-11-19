const postWalterPath = () =>
	window.parent?.postMessage(
		{ type: 'walter:navigation', path: location.pathname + location.search },
		'*',
	);

document.addEventListener('astro:page-load', postWalterPath);
window.addEventListener('load', postWalterPath);
