

function checkStyle() {//设置样式
    if ($("input[type=checkbox]")) {
        var r = $(".input_style input[type=checkbox]");
        function select_element(obj, types) {//设置背景图片
            $(obj).parent().removeClass("active");
            if (obj.type == "checkbox") {
                $(obj).parent().addClass("active")
            }
            if (types) {
                if (obj.type == "checkbox") { $(obj).parent().removeClass("active") }
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