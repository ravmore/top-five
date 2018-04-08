'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var renderHtml = function renderHtml(rootContent) {
	var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Isomorphic Template';

	return '\n\t\t<!doctype html>\n\t\t<html>\n\t\t<head>\n\t\t\t<title>' + title + '</title>\n\t\t\t<link rel="stylesheet" href="/css/main.css">\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="root">' + rootContent + '</div>\n\n\t\t\t<script src="/js/bundle.js"></script>\n\t\t</body>\n\t\t</html>\n\t';
};

exports.default = renderHtml;