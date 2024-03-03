/**
 * @name SmoothScrolling
 * @version 1.0
 * @author Shadax
 * @authorId 652878644087357460
 * @description Makes Scrolling Silky Smooth!
 * @website https://github.com/Sh-ad-ax/Misc
 * @source https://github.com/Sh-ad-ax/Misc/blob/main/Plugins/SmoothScrolling/SmoothScrolling.js
 */

module.exports = class Plugin {
	load() {}
	start() {
	let ssb;
	ssb = document.createElement("script");
	ssb.id = "SmoothScrolling";
	ssb.type = "text/javascript";
	ssb.src = "https://cdn.jsdelivr.net/gh/Sh-ad-ax/Misc@7dda16684df9def891b995c518cce8fb05003508/Plugins/SmoothScrolling/SmoothScrolling.js";
	document.head.appendChild(ssb);
}
	stop() {} 
}
