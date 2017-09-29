
//全选反选
$.fn.extend({
    checkAll: function (itemSelector, checkedCallback) {
        var $me = this;

        function checkAllMethod() {
            $(itemSelector).attr("checked", $me.is(":checked"));
            if (checkedCallback) checkedCallback();
        }

        $me.on("click", function () {
            checkAllMethod();
        });

        checkAllMethod();

        $(itemSelector).on("click", function () {

            $me.attr("checked", $(itemSelector).filter(":not(:checked)").length == 0);
            if (checkedCallback) checkedCallback();
        });
    }
});

//自定义input[checkbox]样式  专利年费查询页面
function check_style() {//设置样式
    if ($("input[type=checkbox]")) {
        var r = $(".input_style input[type=checkbox]");
        function select_element(obj, types) {//设置背景图片
            $(obj).parent().css("background", "url(../../images/annualSelectIco.png) no-repeat center");
            if (obj.type == "checkbox") {
                $(obj).parent().css("background", "url(../../images/annualSelectOnIco.png) no-repeat center");
            }
            if (types) {
                if (obj.type == "checkbox") { $(obj).parent().css("background", "url(../../images/annualSelectIco.png) no-repeat center"); }
            }
        } //1
        for (var i = 0; i < r.length; i++) {
            if (r[i].type == "checkbox") {
                r[i].style.opacity = 0; r[i].style.filter = "alpha(opacity=0)";//隐藏真实的checkbox
                r[i].onclick = function () { select_element(this); unfocus(); }
                if (r[i].checked == true) { select_element(r[i]); } else { select_element(r[i], 1); }
            }
        }
        function unfocus() {//处理未选中
            for (var i = 0; i < r.length; i++) {
                if (r[i].type == "checkbox") {
                    if (r[i].checked == true) {
                        select_element(r[i])
                    } else {
                        select_element(r[i], 1)
                    }
                }
            }
        } //2
    }
} //3