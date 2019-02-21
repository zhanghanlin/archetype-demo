'use strict';
var _web_common = {
    ajax: function (options) {
        /*AJAX请求*/
        $.ajax({
            url: options.url,           //AJAX地址
            type: 'POST',               //默认POST请求
            dataType: 'json',           //默认JSON格式
            scriptCharset: 'utf-8',     //默认UTF-8
            data: options.data,        //请求参数
            xhrFields: {withCredentials: !0},//跨子域同步Cookie
            success: function (result) {
                options.success(result);
            }
        });
    }
};