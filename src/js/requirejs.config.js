require.config({
	baseUrl : "/",

	paths: {
		"jquery" : "libs/jquery/jquery-3.2.1",
		"header" : "js/components/header",
		"footer" : "js/components/footer"
		// "collect" : "js/collect"
	},
	//不符合AMD规范的模块，垫片
	shim: {
		"cookie" : {
			deps: ["jquery"]
		}
	}
})