window.onload = function () {

	var ua = document.getElementById("ua"),
		os = document.getElementById("os"),
		oversion = document.getElementById("overs"),
		browser = document.getElementById("browser"),
		bversion = document.getElementById("bvers");

	ua.innerHTML = ua.innerHTML + owser.ua;
	os.innerHTML = os.innerHTML + owser.os.name;
	oversion.innerHTML = oversion.innerHTML + owser.os.version;
	browser.innerHTML = browser.innerHTML + owser.browser.name;
	bversion.innerHTML = bversion.innerHTML + owser.browser.version;
};
