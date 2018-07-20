var ClearAdvUtils = {
    host: window.location.host,
    /**
     * 是否百度搜索页面
     * @returns {boolean}
     */
    isBaiduQuery: function (){
        return this.host.indexOf("www.baidu.com") >= 0;
    },
    /**
     * 是否百度知道
     * @returns {boolean}
     */
    isBaiduZhidao: function(){
        return this.host.indexOf("zhidao.baidu.com") >= 0;
    },
    /**
     * 清除广告
     */
    clearAdv: function (){
        //总共执行的次数，循环执行，防止部分广告内容未加载出来
        var totalTime = 10;
        var i = 0;
        var self = this;
        setInterval(function(){
            if(i > totalTime){
                return;
            }
            self.clearAdvOneTime();
            i++;
        }, 500);
    },
    clearAdvOneTime: function(){
        console.log("开始清除广告");
        /**
         * 百度搜索页广告
         */
        if(this.isBaiduQuery()){
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
        } else if(this.isBaiduZhidao()){
            /**
             * 百度知道
             */
            //右侧广告
            $("aside.grid-r.qb-side>div:not(.wgt-user,.wgt-daily)").remove();
            //为您推荐、您可能关注的内容
            $(".wgt-bottom-union,.EC_result").remove();
            //底部搜索推荐
            $("iframe").each(function(){
                //类似于id="iframe2598845_0"的格式
                if($(this).attr("id").indexOf("iframe") >= 0){
                    $(this.remove());
                }
            })
        }else{
            /**
             * 百度联盟相关网页
             */
            $("iframe").remove();
            $(".csdn-tracking-statistics.mb8.box-shadow").remove();
        }
    }
};