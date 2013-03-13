Owser
------
A device detector derived from Dustin Diaz's [Bowser](https://www.github.coim/ded/bowser). Because sometimes, there is no other way, and not even good modern browsers always provide good feature detection mechanisms.  Features detection of both operating systems and browsers.

So... it works like this:

``` js
if (owser.browser.msie && owser.browser.version <= 6) {
  alert('Hello China');
}
```

Detected Browsers
-----

  * msie
  * safari[webkit]
  * chrome[webkit]
  * firefox[gecko]
  * opera

Check for specific browsers:
```
if (owser.browser.chrome) {
  alert("chrome");
}
```

Or, just find out what browser you're on:
```
alert(owser.browser.name);
```


Detected Operating Systems
----

  * Windows XP
  * Windows Vista
  * Windows 7
  * Windows 8
  * Mac OS X (all revent versions)
  * iOS (since at least 4.0)
  * Android (since at least 2.1)
  * Blackberry (coming shortly)
  * Windows Phone (coming shortly)

Notes
----
Safari, Chrome, and Firefox will report that they have webkit|gecko engines

``` js
if (owser.browser.webkit) {
  // do stuff with safari & chrome
}
```

Ender installation
-----
If you don't already have [Ender](http://ender.no.de) (an npm package) install it now (and don't look back)

    $ npm install ender

then add Owser to your module collection

    $ ender add owser

use it like this:

``` js
if ($.owser.browser.chrome) {
  alert('Hello Silicon Valley');
}
```

You should note, however, that Owser will also work with jQuery or straight up JavaScript.

Graded Browser Support
---------
One useful feature of Owser is that aside from checking one browser from another -- it will keep up to date with [Yahoo's Graded Browser Support](http://developer.yahoo.com/yui/articles/gbs/) chart, giving you access to each grade on the Owser object

``` js
if (owser.browser.a) {
  // support full feature set
}
else if (owser.browser.c) {
  // serve degraded version
}
else {
  // unsupported (owser..browser.x)
}