

$(function () {
    //�ص�����
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        var goTop = $(".goTop");
        if (height > 300) {
            goTop.fadeIn(500);
        } else {
            goTop.fadeOut(500);
        }
    });
    $(".goTop").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
    //tabƽ������
    (function () {
        var tab = $(".nameTabBtns a");
        if (tab) {
            tab.width($(".nameTabBtns").width() / tab.length - 2);
            $(".nameTabBtns a:first").width($(".nameTabBtns").width() / tab.length);
        }
    }());
    //��ע����
    $(".popBox .close").click(function () {
        $(".popWrap").hide();
    });
    $(".focus").click(function () {
        $(".popLogin").show();
    });
    //������¼����֤
    if ($(".popLogin form")) {
        $(".popLogin form").validate({
            rules: {
                userName: {
                required: true
             },
            password: {
                required: true,
                minlength: 6
             }
           }
        });
    }
    

    //ʱ��ѡ��
    $(".selectYers .yearsSelect").click(function () {
        $(".subSelectUl", $(this)).toggle();
    });
    $(".subSelectUl li").click(function () {
        var thisText = $("a", $(this)).text();
        $(".selectYers .yearsSelect > li > a").text(thisText);
    });
    $(".yearsSelect").on("click", function (event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    });
    $(window).on("click", function () {
        $(".subSelectUl").hide();
    });

   

});

