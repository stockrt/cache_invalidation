/*
 * Author: Rogério Carvalho Schneider <stockrt@gmail.com>
 * URL:    http://stockrt.github.com
 *
 * Invalidates browser's cache for a given page based on the last refresh.
 *
 * Usage:
 * - Include in the HEAD of your page and set the TTL
 *
 * <html>
 *
 * <head>
 *  <script src="http://your_site/javascripts/querystring.js" type="text/javascript"></script>
 *  <script src="http://your_site/javascripts/cache_invalidation.js" type="text/javascript"></script>
 * </head>
 *
 * <body>
 * </body>
 *
 * </html>
 *
 * - And set the TTL you want into the cache_invalidation.js file:
 *    // TTL: set your cache threshold here
 *    var ttl = 300;  // seconds
 */

// TTL: set your cache threshold here
var ttl = 300;  // seconds

var ttl = ttl * 1000;
var qs = new Querystring();
var ts = Number(qs.get("cache"));
var now = Number(new Date().getTime());

function rl(now) {
    var loc = window.location.href.replace(/\?.*/, "");
    window.location.href = loc+"?cache="+now;
}

if (ts) {
    var d = ts + ttl - now;
    if (d < 0)
        rl(now);
}
else
    rl(now);
