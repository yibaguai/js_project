define(["jquery"], () => {
	class Footer{
		constructor(){
			this.init();
		}

		init(){
			//加载footer.html
			new Promise((resolve, reject) => {
				$("footer").load("/html/components/footer.html", () => {
					resolve();
				})
			}).then(() => {

			})
		}

	}
	return new Footer();
})