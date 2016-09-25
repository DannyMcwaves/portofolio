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

$(window).resize(function (event) {
	"use strict";
	$("div.carousel-item").css({
		height: $(window).outerHeight()
	});
}).ready(function (event) {
	"use strict";
	$("div.carousel-item").css({
		height: $(window).outerHeight()
	});
});

function divWidth() {
	"use strict";
	$("div#start, div#startTwo").height($("div.carousel-item").height());
}

$(window).ready(divWidth).resize(divWidth);
