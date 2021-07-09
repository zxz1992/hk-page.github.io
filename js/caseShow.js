var articlePage = 1;
var cate_id = '';
var catePage = 1;
loadArticleHeader();
loadArticleList(articlePage, cate_id);
loadCateList(catePage);
function loadArticleHeader(){
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/article/list";
    requestData(url,{"recommend":2,"limit":1},"GET",function (back) {
        var html = '';
        $('#articleImg').attr('src', domain + back.data.data[0].big_picture);
        $('#articleTitle').html(back.data.data[0].title);
        layer.closeAll();
    });
}
function loadArticleList(page, cate_id, callback){
    if(cate_id === undefined){
        cate_id = null;
    }
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/article/list";
    requestData(url,{"page":page,cate_id:cate_id,"limit":9},"GET",function (back) {
        var html = '';
        $.each(back.data.data, function (k,v) {
            html +=
                ` <li>
                    <a href="./details.html?id=${v.id}">
                      <div class="img" style="overflow:hidden">
                        <img src="${domain}${v.big_picture}" alt="" srcset="">
                      </div>
                      <div class="text-describe">
                        <p>品牌：${v.brand.name}</p>
                        <p>品牌介绍：${v.brand.desc}</p>
                        <p>内容：${v.title}</p>
                      </div>
                    </a>
                  </li>`;
        });
        if (back.data.data.length % 3 === 2) {
            html += '<li></li>'
        }
        $('#articleList').append(html);
        articlePage ++;
        layer.closeAll();
        if(typeof callback === "function"){
            callback()
        }
    });
}
function loadCateList(page) {
    layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    var url = apiDomain + "/cate/list";
    requestData(url,{"page":page,"limit":999},"GET",function (back) {
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

$('#js_changeActive').on('click', 'li',function () {
    var cate_id = $(this).data('cate-id');
    $(this).siblings().removeClass(' active');
    $(this).addClass(' active');
    $('#articleList').html('');
    articlePage = 1;
    loadArticleList(articlePage, cate_id, function () {

    });
})

