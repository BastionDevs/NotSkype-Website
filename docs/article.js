(function () {
	var data = window.NotSkypeNews;
	var container = document.getElementById('article-content');
	var error = document.getElementById('article-error');
	var params;
	var id = '';
	var article = null;
	var i;

	if (!container || !data || !data.articles) return;

	function getQueryParam(name) {
		var query = window.location.search ? window.location.search.substring(1).split('&') : [];
		var j;
		for (j = 0; j < query.length; j++) {
			params = query[j].split('=');
			if (decodeURIComponent(params[0]) === name) {
				return decodeURIComponent((params[1] || '').replace(/\+/g, ' '));
			}
		}
		return '';
	}

	function appendTextElement(parent, tag, text, className) {
		var el = document.createElement(tag);
		if (className) el.className = className;
		el.appendChild(document.createTextNode(text));
		parent.appendChild(el);
		return el;
	}

	function addBlock(parent, block) {
		var el;
		var j;

		if (!block || !block.type) return;

		if (block.type === 'p') {
			appendTextElement(parent, 'p', block.text || '');
		} else if (block.type === 'h3') {
			appendTextElement(parent, 'h3', block.text || '', 'subt');
		} else if (block.type === 'ul' || block.type === 'ol') {
			el = document.createElement(block.type);
			for (j = 0; j < (block.items || []).length; j++) {
				appendTextElement(el, 'li', block.items[j]);
			}
			parent.appendChild(el);
		}
	}

	id = getQueryParam('id');
	for (i = 0; i < data.articles.length; i++) {
		if (data.articles[i].id === id) {
			article = data.articles[i];
			break;
		}
	}

	if (!article) {
		if (error) error.style.display = 'block';
		container.style.display = 'none';
		return;
	}

	document.title = article.title + ' | NotSkype News';
	appendTextElement(container, 'h3', article.title, 't article-heading');

	var metadata = [];
	if (article.published) metadata.push(article.published + (article.time ? ' at ' + article.time : ''));
	if (article.author) metadata.push('By ' + article.author);
	if (article.category) metadata.push(article.category);
	appendTextElement(container, 'div', metadata.join(' · '), 'article-meta');

	for (i = 0; i < (article.blocks || []).length; i++) {
		addBlock(container, article.blocks[i]);
	}
}());
