!function (name, definition) {
	if (typeof define == 'function') define(definition);
	else if (typeof module != 'undefined' && module.exports) module.exports['browser'] = definition();
	else this[name] = definition();
}('owser', function () {
	/**
		* navigator.userAgent =>
		* Chrome:  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.57 Safari/534.24"
		* Opera:   "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.7; U; en) Presto/2.7.62 Version/11.01"
		* Safari:  "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1"
		* IE:      "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)"
		* Firefox: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0) Gecko/20100101 Firefox/4.0"
		* iPhone:  "Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5"
		* iPad:    "Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5",
		* Android: "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; T-Mobile G2 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
		* Touchpad: "Mozilla/5.0 (hp-tabled;Linux;hpwOS/3.0.5; U; en-US)) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.83 Safari/534.6 TouchPad/1.0"
		* PhantomJS: "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.5.0 Safari/534.34"
		* Firefox OS: "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0"
		* Windows Phone: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
		*/

	var ua = navigator.userAgent,
		t = true,
		ie = /msie/i.test(ua),
		windows = /windows nt/i.test(ua),
		mac = /mac os x/i.test(ua),
		chrome = /chrome/i.test(ua),
		phantom = /phantom/i.test(ua),
		safari = /safari/i.test(ua) && !chrome && !phantom,
		iphone = /iphone/i.test(ua),
		ipad = /ipad/i.test(ua),
		ipod = /ipad/i.test(ua),
		winphone = /windows phone/i.test(ua),
		touchpad = /touchpad/i.test(ua),
		android = /android/i.test(ua),
		opera = /opera/i.test(ua),
		firefox = /firefox/i.test(ua),
		firefoxos =  /mobile\; rv/i.test(ua) && firefox,
		gecko = /gecko\//i.test(ua),
		seamonkey = /seamonkey\//i.test(ua),
		webkitVersion = /version\/(\d+(\.\d+)?)/i,
		o,
		owser = new Object();

	function detectBrowser() {

		if (ie) return {
			msie: t,
			name: 'ie',
			version: ua.match(/msie (\d+(\.\d+)?);/i)[1]
		};
		if (chrome) return {
			webkit: t,
			chrome: t,
			name: 'chrome',
			version: ua.match(/chrome\/(\d+(\.\d+)?)/i)[1]
		};
		if (phantom) return {
			webkit: t,
			phantom: t,
			name: 'phantomjs',
			version: ua.match(/phantomjs\/(\d+(\.\d+)+)/i)[1]
		};
		if (touchpad) return {
			webkit: t,
			touchpad: t,
			name: 'touchpad',
			version : ua.match(/touchpad\/(\d+(\.\d+)?)/i)[1]
		};
		if (iphone || ipad || ipod) {
			o = {
				webkit: t,
				mobile: t,
				ios: t,
				iphone: iphone,
				ipad: ipad,
				ipod: ipod,
				name: 'safari'
			};
			// WTF: version is not part of user agent in web apps
			if (webkitVersion.test(ua)) {
				o.version = ua.match(webkitVersion)[1];
			}
			return o;
		}
		if (android) return {
			webkit: t,
			android: t,
			mobile: t,
			name: 'android stock',
			version: ua.match(webkitVersion)[1]
		};
		if (safari) return {
			webkit: t,
			safari: t,
			name: 'safari',
			version: ua.match(webkitVersion)[1]
		};
		if (opera) return {
			opera: t,
			name: 'opera',
			version: ua.match(webkitVersion)[1]
		};
		if (gecko) {
			o = {
				gecko: t,
				mozilla: t,
				name: 'gecko',
				version: ua.match(/firefox\/(\d+(\.\d+)?)/i)[1]
			};
			if (firefox) {
				o.firefox = t;
				o.name = 'firefox';
			}
			return o;
		}
		if (seamonkey) return {
			seamonkey: t,
			name: 'seamonkey',
			version: ua.match(/seamonkey\/(\d+(\.\d+)?)/i)[1]
		};
	}

	function detectOS() {

		if (winphone) return {
			winphone: t,
			mobile: t,
			name: "winphone",
			version: ua.match(/windows phone (\d+\.\d+)?/i)[1]
		};

		if (windows) {
			o = {
				windows: t,
				name: "windows",
				version: ua.match(/windows nt (\d+\.\d+)?/i)[1]
			};

			if (o.version == 5.1 || o.version == 5.2) {
				o.version = 'xp';
			} else if (o.version == 6.0) {
				o.version = 'vista';
			} else if (o.version == 6.1) {
				o.version = 7;
			} else if (o.version == 6.2) {
				o.version = 8;
			}

			return o;
		}

		if (mac && !(iphone || ipod || ipad)) return {
			mac: t,
			name: "mac",
			version: ua.match(/mac os x (\d+(\.|_)\d+)?/i)[1].replace('_', '.')
		};

		if (iphone || ipad || ipod) return {
			mobile: t,
			ios: t,
			name: 'ios',
			version: ua.match(/ os (\d+(\.|_)\d+)?/i)[1].replace('_', '.')
		};

		if (android) return {
			android: t,
			mobile: t,
			tablet: ua.indexOf('mobile') == -1 && ua.indexOf('Mobile') == -1,
			name: 'android',
			version: ua.match(/android (\d+\.\d+?)/i)[1]
		};

		if (firefoxos) return {
			firefoxos: t,
			mobile: t,
			name: 'firefoxos',
			version: ua.match(/rv:(\d+\.\d+?)/i)[1]
		};
	}

	owser.browser = detectBrowser();
	owser.os = detectOS();
	owser.ua = ua;

	// Graded Browser Support
	// http://developer.yahoo.com/yui/articles/gbs
	if ((owser.browser.msie && owser.browser.version >= 7) ||
			(owser.browser.chrome && owser.browser.version >= 10) ||
			(owser.browser.firefox && owser.browser.version >= 4.0) ||
			(owser.browser.safari && owser.browser.version >= 5) ||
			(owser.browser.opera && owser.browser.version >= 10.0)) {
		owser.browser.a = t;
	}

	else if ((owser.browser.msie && owser.browser.version < 7) ||
			(owser.browser.chrome && owser.browser.version < 10) ||
			(owser.browser.firefox && owser.browser.version < 4.0) ||
			(owser.browser.safari && owser.browser.version < 5) ||
			(owser.browser.opera && owser.browser.version < 10.0)) {
		owser.browser.c = t;
	} else owser.browser.x = t;

	return owser;
});
