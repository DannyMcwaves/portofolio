var $ = window.$;


$("#btn").click(function (event) {
	"use strict";
	if ($(this).attr("data") === "lt") {
		$(this).html("&lt;").attr("data", "gt");
	} else {
		$(this).html("&gt;").attr("data", "lt");
	}
});

$("#cv").click(function (event) {
	"use strict";
	$.get("/ma/dannyMcwaves", function (response) {
		window.alert(response);
	});
});
