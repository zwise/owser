window.onload = function () {

	var ua = document.getElementById("ua"),
		os = document.getElementById("os"),
		version = document.getElementById("vers");

	ua.innerHTML = ua.innerHTML + opsys.ua;
	os.innerHTML = os.innerHTML + opsys.os;
	version.innerHTML = version.innerHTML + opsys.version;

};
