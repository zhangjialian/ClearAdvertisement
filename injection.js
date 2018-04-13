//$(document).ready(function() {

var host = window.location.host;

clearAdv();

/**
 * 百度列表页，点击搜索按钮
 */
$(".bg.s_btn").click(function(){
	if (isBaidu()){
		clearAdv();
	}
});

/**
 * 是否百度页面
 * @returns {boolean}
 */
function isBaidu(){
    return host.indexOf("baidu") >= 0;
}

/**
 * 清除广告
 */
function clearAdv(){
	//总共执行的次数，循环执行，防止部分广告内容未加载出来
    var totalTime = 10;

    var i = 0;
    setInterval(function(){
        if(i > totalTime){
            return;
        }

        console.log("开始清除广告");

        /**
         * 百度搜索页广告
         */
        if(isBaidu()){
            $("#content_left>div").each(function(){
                var self = $(this);
                //红底，左上角有个广告的链接
                var advText1 = self.children("a").children("span").text();
                if(advText1 == "广告"){
                    self.remove();
                    return;
                }
                //普通链接，右下角有个广告的链接
                self.find("a,span").each(function(){
                    if($(this).text() == "广告"){
                        self.remove();
                        return;
                    }
                })

            })
        }else{
            /**
             * 百度联盟相关网页
             */
            $("iframe").hide();
        }

        i++;
    }, 500);
}
