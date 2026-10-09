(function () {
	var data = window.NotSkypeNews;
	var list = document.getElementById('news-list');
	var empty = document.getElementById('news-empty');
	var i;

	if (!list || !data || !data.articles) return;

	function textNode(tag, text, className) {
		var el = document.createElement(tag);
		if (className) el.className = className;
		el.appendChild(document.createTextNode(text));
		return el;
	}

	for (i = 0; i < data.articles.length; i++) {
		var article = data.articles[i];
		var item = document.createElement('div');
		var title = document.createElement('h4');
		var titleLink = document.createElement('a');
		var summary = document.createElement('p');
		var readLink = document.createElement('a');

		item.className = 'news-item';
		item.id = article.id;

		titleLink.href = 'article.html?id=' + encodeURIComponent(article.id);
		titleLink.className = 'news-title-link';
		titleLink.appendChild(document.createTextNode(article.title));
		title.appendChild(titleLink);
		item.appendChild(title);

		item.appendChild(textNode('div', article.listingMeta || article.published || '', 'news-date'));

		summary.appendChild(document.createTextNode(article.summary + ' '));
		readLink.href = 'article.html?id=' + encodeURIComponent(article.id);
		readLink.className = 'read-more';
		readLink.appendChild(document.createTextNode('Read article »'));
		summary.appendChild(readLink);
		item.appendChild(summary);

		list.appendChild(item);
	}

	if (empty) empty.style.display = 'none';
}());
