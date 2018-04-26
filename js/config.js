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
            $(".grid-r.qb-side/*,.widget-new-graphic*/").remove();
        }else{
            /**
             * 百度联盟相关网页
             */
            $("iframe").remove();
        }
    }
};