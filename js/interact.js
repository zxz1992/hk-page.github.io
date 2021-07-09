//正式
const domain = "http://moenadmin.kenuonet.com";
const apiDomain = "http://moenadmin.kenuonet.com/api";
//本地
// const domain = "http://moen.test";
// const apiDomain = "http://moen.test/api";
function requestData(url,data,method,callback) {
    $.ajax({
        type: method,
        //headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'},
        url: url,
        dataType: 'json',
        data: data, //请求的附加参数，用json对象
        success: function (res) {
           if(typeof callback === "function"){
               callback(res)
           }
        },
        error: function () {
            layer.closeAll();
            layer.msg("fail", {icon: 5});
        }
    });
}