//$(document).ready(function() {


//进入页面触发清理事件
ClearAdvUtils.clearAdv();

/**
 * 百度列表页，点击搜索按钮 触发清理事件
 */
$(".bg.s_btn").click(function(){
	if (ClearAdvUtils.isBaiduQuery()){
        ClearAdvUtils.clearAdv();
	}
});