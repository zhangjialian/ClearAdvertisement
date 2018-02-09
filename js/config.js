var product_host = "http://139.224.164.254";
var debug_host = "http://localhost";
var is_debug = false;

function getHost(){
    if(is_debug){
        return debug_host;
    }else{
        return product_host;
    }
}