(function () {
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var date = new Date();
	var dayNode = document.getElementById('day');
	var dateNode = document.getElementById('date');

	if (dayNode) dayNode.innerText = days[date.getDay()];
	if (dateNode) dateNode.innerText = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}());
