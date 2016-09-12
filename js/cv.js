var $ = window.$;

$("#ctrl").mouseenter(function (event) {
	"use strict";
	$("#menu").collapse("show");
});

$("#menu").mouseleave(function (event) {
	"use strict";
	$("#menu").collapse("hide");
});