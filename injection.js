//$(document).ready(function() {

	setInterval(function(){
		$("#content_left>div").each(function(){
			var footerContent = $(this).find("div").eq(2).html();
			if(isAdviertisement(footerContent)){
				$(this).hide();
			}
		})
	}, 1000);

	function isAdviertisement(footerContent){
		//console.log(footerContent);
		if(footerContent.indexOf("广告") > 0){
			return true;
		}
		return false;
	}
	/**
	 * 百度联盟相关网页
	 */
	setInterval(function(){
		//$(".J_close.layer_close .fixRight_box iframe, .extension_other iframe, .csdn-tracking-statistics iframe").hide();
		$("iframe").hide();
	}, 1000);
//});
