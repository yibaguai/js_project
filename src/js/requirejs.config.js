require.config({
	baseUrl : "/",

	paths: {
		"jquery" : "libs/jquery/jquery-3.2.1",
		"cookie" : "libs/jquery/jquery-plugins/jquery.cookie",
		"header" : "js/components/header",
		"footer" : "js/components/footer",
		"item" : "js/components/item",
		"url" : "js/components/url",
		"cart" : "js/components/cart",
		"imgtab" : "js/components/imgtab",
		"template" : "libs/template/template-web"
	},
	//不符合AMD规范的模块，垫片
	shim: {
		"cookie" : {
			deps: ["jquery"]
		}
	}
})