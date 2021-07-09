var brandPage = 1;
loadBannerList();
loadArticleList();
loadBrandList(brandPage);

function loadBannerList(){
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/banner/list";
    $.ajax({
        type: "GET",
        //headers: {'X-CSRF-TOKEN': '{{ csrf_token() }}'},
        url: url,
        async: false,
        dataType: 'json',
        data: {"limit":100}, //请求的附加参数，用json对象
        success: function (res) {
            var html = '';
            var carousel_indicators_html = `   <ol class="carousel-indicators">`;
            var carousel_inner_html = `   <div class="carousel-inner">`;
            $.each(res.data.data, function (k,v) {
                carousel_indicators_html += ` <li data-target="#carouselExampleCaptions" data-slide-to="${k}" class="${is_active(k)}"></li>`;
                carousel_inner_html +=
                    `<div class="carousel-item ${is_active(k)}">
                  <img src="${domain + v.url}" class="d-block w-100" alt="...">
                </div>`;
            });

            carousel_indicators_html += ` </ol>`;
            carousel_inner_html += `  </div>`;
            html += carousel_indicators_html + carousel_inner_html;
            $('#carouselExampleCaptions').append(html);
            // $('span').css('font-family','SourceHanSansCN-Regular!important');
            layer.closeAll();
        },
        error: function () {
            layer.closeAll();
            layer.msg("fail", {icon: 5});
        }
    });

}

function is_active(k) {
    if(k === 0){
        return 'active';
    }else{
        return  '';
    }
}

function loadArticleList(){
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/article/list";
    requestData(url,{"recommend":1,"limit":100},"GET",function (back) {
        var html = '';
        $.each(back.data.data, function (k,v) {
            // var content = `${v.content}`;
            // content = content.replace(/\/uploads\//g, domain+'/uploads/');
            html +=
                `<li>
                    <a href="/details.html?id=${v.id}">
                      <img src="${domain}${v.big_picture}" alt="" srcset="">
                      <div class="text-info">
                        <p>品牌：${v.brand.name}</p>
                        <p>品牌介绍：${v.brand.desc ? v.brand.desc : ''}</p>
                        <p class="title">标题：${v.title}</p>
                        <p>内容：${v.desc}</p>
                      </div>
                    </a>
                  </li>`;
        });
        $('#articleList').append(html);
        // $('span').css('font-family','SourceHanSansCN-Regular!important');
        layer.closeAll();
    });
}

function loadBrandList(page) {
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/brand/list";
    requestData(url,{"page":page,"limit":3},"GET",function (back) {
        var html = '';
        $.each(back.data.data, function (k,v) {
            html +=
                `<li class="item-box">
                <a href="javascript:void(0)">
                  <img src="${domain}${v.logo}" alt="" srcset="">
                  <div class="text-box">${v.name}</div>
                </a>
              </li>`;
        });
        $('#brandList').append(html);
        brandPage ++;
        layer.closeAll();
    });
}

$('#more').on('click',function () {
    loadBrandList(brandPage)
});


