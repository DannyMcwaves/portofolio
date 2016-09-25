var $ = window.$;

$("#ctrl").mouseenter(function (event) {
	"use strict";
	$("#menu").collapse("show");
});

$("#menu").mouseleave(function (event) {
	"use strict";
	$("#menu").collapse("hide");
});

$("#py").click(function (event) {
	$.get("/skills/py", function (data) {
		$("#modal-body").html(data);
	});
});

$("#node").click(function (event) {
	$.get("/skills/node", function (data) {
		$("#modal-body").html(data);
	});
});

$("#jscript").click(function (event) {
	$.get("/skills/jscript", function (data) {
		$("#modal-body").html(data);
	});
});

$("#markup").click(function (event) {
	$.get("/skills/markup", function (data) {
		$("#modal-body").html(data);
	});
});
