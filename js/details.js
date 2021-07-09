
$(function () {
    var getUrlCode = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null
    }
    var id = getUrlCode('id')
    if (id === undefined || id == '' || id == null) {
        layer.msg('数据错误')
        return false;
    }

    var brandPage = 1;
    loadDetail()
    loadBrandList(brandPage);
    $('#more').on('click', function () {
        loadBrandList(brandPage)
    });


    function loadDetail() {
        layer.load(1, {
            shade: [0.1, '#fff'] //0.1透明度的白色背景
        });
        var url = apiDomain + "/article/detail";
        requestData(url, {"id":id}, "GET", function (back) {
            console.log(back)
            $('#title').html(back.data.title);
            var content = back.data.content;
            content = content.replace(/\/uploads\//g, domain+'/uploads/');
            $('#content').html(content);
            layer.closeAll();
        });
    }

    function loadBrandList(page) {
        layer.load(1, {
            shade: [0.1, '#fff'] //0.1透明度的白色背景
        });
        var url = apiDomain + "/brand/list";
        requestData(url, { "page": page, "limit": 3}, "GET", function (back) {
            var html = '';
            $.each(back.data.data, function (k, v) {
                html +=
                    `<li class="item-box">
                <a href="javascript:void(0)">
                  <img src="${domain}${v.logo}" alt="" srcset="">
                  <div class="text-box">${v.name}</div>
                </a>
              </li>`;
            });
            $('#brandList').append(html);
            brandPage++;
            layer.closeAll();
        });
    }
});





