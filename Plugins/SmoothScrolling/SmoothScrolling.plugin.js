/**
 * @name SmoothScrolling
 * @version 1.0
 * @author Shadax
 * @authorId 652878644087357460
 * @description Makes Scrolling Silky Smooth!
 * @website https://github.com/ShadaxsRepo/Misc
 * @source https://github.com/ShadaxsRepo/Misc/blob/main/Plugins/SmoothScrolling/SmoothScrolling.js
 */

module.exports = class Plugin {
	load() {}
	start() {
	let ssb;
	ssb = document.createElement("script");
	ssb.id = "SmoothScrolling";
	ssb.type = "text/javascript";
	ssb.src = "https://cdn.jsdelivr.net/gh/ShadaxsRepo/Misc/Plugins/SmoothScrolling/SmoothScrolling.js";
	document.head.appendChild(ssb);
}
	stop() {} 
}
