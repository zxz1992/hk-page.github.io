var brandPage = 1;
var name = '';
var cate_id = '';
loadBrandList(brandPage, cate_id, name);
loadCateList();

function loadBrandList(page, cate_id, name, callback) {
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/brand/list";
    requestData(url,{"page":page, "cate_id":cate_id, "name":name, "limit":30},"GET",function (back) {
        var html = '';
        $.each(back.data.data, function (k,v) {
            html +=
                `<li>
                    <a href="javascript:void(0)">
                      <img src="${domain}${v.logo}" alt="" srcset="">
                      <div>${v.name}</div>
                    </a>
                  </li>`;
        });
        $('#brandList').append(html);
        brandPage ++;
        layer.closeAll();
        if(typeof callback === "function"){
            callback()
        }
    });
}
function loadCateList() {
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/cate/list";
    requestData(url,{"limit":999},"GET",function (back) {
        var html = '';
        $.each(back.data.data, function (k,v) {
            var offsetNum = v.name.length
            if (offsetNum > 4) {
                html +=
                ` <li class="zhazha" data-cate-id="${v.id}" style="width: ${ offsetNum * 1.3 }rem">
                    <a href="javascript:void(0)">${v.name}</a>
                  </li>`;
            } else {
                html +=
                ` <li data-cate-id="${v.id}">
                    <a href="javascript:void(0)">${v.name}</a>
                  </li>`;
            }
        });
        $('#js_changeActive').append(html);
        layer.closeAll();
    });
}

$('#search').bind('keyup', function(event) {
    if (event.keyCode == "13") {
        var allObj = $('#js_changeActive').find('li').eq(0);
        $(allObj).siblings().removeClass(' active');
        $(allObj).addClass(' active');
        $('#brandList').html('');
        brandPage = 1;
        cate_id = '';
        name = $('#search').val();
        loadBrandList(brandPage, cate_id, name, function () {

        });
    }
});
$('#js_changeActive').on('click', 'li',function () {
    var cate_id = $(this).data('cate-id');
    $(this).siblings().removeClass(' active');
    $(this).addClass(' active');
    $('#brandList').html('');
    brandPage = 1;
    loadBrandList(brandPage, cate_id, name, function () {

    });
})
$('#more').on('click',function () {
    loadBrandList(brandPage, cate_id, name, function () {

    })
});

