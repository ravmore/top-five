// returns html with rootContent (string) and title (string) inserted
const renderHtml = (rootContent, title) => {
	title = title || 'Isomorphic Template';
	if (typeof rootContent !== 'string')
		return `:::ERROR::: rootContent must be a string. Recieved type ${typeof rootContent}`;
	return `
		<!doctype html>
		<html>
		<head>
			<title>${title}</title>
			<link rel="stylesheet" href="/css/main.css">
		</head>
		<body>
			<div id="root">${rootContent}</div>

			<script src="/js/bundle.js"></script>
		</body>
		</html>
	`;
}

export default renderHtml;
