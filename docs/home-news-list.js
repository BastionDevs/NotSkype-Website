(function () {
	var data = window.NotSkypeNews;
	var more = document.getElementById('home-news-more');
	var parent;
	var i;
	var count;

	if (!more || !data || !data.articles) return;

	parent = more.parentNode;
	count = data.articles.length < 2 ? data.articles.length : 2;

	for (i = 0; i < count; i++) {
		var article = data.articles[i];
		var item = document.createElement('div');
		var title = document.createElement('h4');
		var titleLink = document.createElement('a');
		var date = document.createElement('div');
		var summary = document.createElement('p');

		item.className = 'news-item';

		titleLink.href = 'article.html?id=' + encodeURIComponent(article.id);
		titleLink.appendChild(document.createTextNode(article.title));
		title.appendChild(titleLink);
		item.appendChild(title);

		date.className = 'news-date';
		date.appendChild(document.createTextNode(article.listingMeta || article.published || ''));
		item.appendChild(date);

		summary.appendChild(document.createTextNode(article.homeSummary || article.summary || ''));
		item.appendChild(summary);

		/* Insert directly into the column before the existing "more news" paragraph */
		parent.insertBefore(item, more);
	}
}());
