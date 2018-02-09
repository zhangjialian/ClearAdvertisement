var host = getHost();

initLoginBox();

$("#btn-login").click(function(){
    var self = $(this);
    if(self.hasClass("disabled")){
        return;
    }
    var username = $.trim($("#username").val());
    var password = $("#password").val();
    if(username == ""){
        showLoginInfo("请输入用户名");
        return;
    }
    if(password == ""){
        showLoginInfo("请输入密码");
        return;
    }
    $.ajax({		//完整的ajax异步交互方法
        url: host + '/user/user/check_login',
        type:'post',
        dateType: 'json',
        data:{
            username: username,
            password: password
        },
        beforeSend:function(xhr){
            self.addClass('disabled');
            showLoginInfo("正在登录...");
        },
        success:function(data,response,status){
            if(data.status == 1){
                showLoginSuccessBox(data.user);
            }else{
                showLoginInfo(data.message);
            }
        },
        complete:function(){
            self.removeClass('disabled');
        }
    })
})

$("#btn-logout").click(function(){
    var self = $(this);
    if(self.hasClass("disabled")){
        return;
    }
    $.ajax({		//完整的ajax异步交互方法
        url: host + '/user/user/log_out',
        type:'get',
        dateType: 'json',
        data:{},
        beforeSend:function(xhr){
            self.addClass('disabled');
        },
        success:function(data,response,status){
            if(data.status == 1){
                showLoginBox();
            }
        },
        complete:function(){
            self.removeClass('disabled');
        }
    })
})

function initLoginBox(){
    $.ajax({		//完整的ajax异步交互方法
        url: host + '/user/user/is_login',
        type:'get',
        dateType: 'json',
        data:{},
        success:function(data,response,status){
            if(data.status == 1){
                showLoginSuccessBox(data.user);
            }else{
                showLoginBox();
            }
        }
    })
}
function showLoginBox(){
    $("#username").val("");
    $("#password").val("");
    showLoginInfo("");

    $("#login-box").show();
    $("#login-success-box").hide();
}
function showLoginSuccessBox(user){
    $("#success-user-name").text(user.username);
    $("#success-point-count").text(user.point_count);

    $("#login-box").hide();
    $("#login-success-box").show();
}
function showLoginInfo(loginInfo){
    $("#login-info").text(loginInfo);
}

document.onkeydown = function(e){
    var ev = document.all ? window.event : e;
    if(ev.keyCode == 13) {
        $("#btn-login").click();
    }
}