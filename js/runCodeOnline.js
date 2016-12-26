/**
 * @doc ui.js，自定义的js管理工具
 * @author Heanes
 * @time 2016-12-13 15:28:38 周二
 */
Import([
    // ****************************** 已有插件 ******************************
    // 剪贴板复制
    '../js/resource/clipboard.js/1.5.15/clipboard.js',
    // 代码高亮及实时编辑
    '../js/resource/codeMirror/5.21.0/theme/eclipse.css',
    '../js/resource/codeMirror/5.21.0/lib/codemirror.js',
    '../js/resource/codeMirror/5.21.0//addon/selection/selection-pointer.js',
    // --代码高亮及实时编辑之自动完成
    '../js/resource/codeMirror/5.21.0/addon/hint/show-hint.js',
    '../js/resource/codeMirror/5.21.0/addon/hint/show-hint.css',
    '../js/resource/codeMirror/5.21.0/addon/hint/html-hint.js',
    '../js/resource/codeMirror/5.21.0/addon/hint/xml-hint.js',
    '../js/resource/codeMirror/5.21.0/addon/hint/javascript-hint.js',
    '../js/resource/codeMirror/5.21.0/addon/hint/css-hint.js',
    '../js/resource/codeMirror/5.21.0/mode/vbscript/vbscript.js',
    '../js/resource/codeMirror/5.21.0/mode/xml/xml.js',
    '../js/resource/codeMirror/5.21.0/mode/javascript/javascript.js',
    '../js/resource/codeMirror/5.21.0/mode/css/css.js',
    '../js/resource/codeMirror/5.21.0/mode/htmlmixed/htmlmixed.js'
]);

/**
 * @doc 导入js文件
 * @author Heanes
 * @time 2016-12-13 15:30:18 周二
 */
function Import() {
    var jsTargetWrap = document.body.getElementsByTagName('cite')[0].children;
    var head = document.body.getElementsByTagName('head');
    var cssTargetWrap = head[head.length];
    var $jsTarget = $('cite').find('script[id="importResource"]');
    var $cssTarget = $('head').find('link[type="text/css"]').last();

    var jsAdd = '';
    var cssAdd = '';
    for (var i = 0; i < arguments.length; i++) {
        var argument = arguments[i];
        if (argument.length > 0) {
            $.each(argument, function (i, item) {
                if (item.match(/\.js$/i)) {
                    var scriptDom = document.createElement('script');
                    scriptDom.type = 'text/javascript';
                    scriptDom.src = item;
                    //$jsTarget.after('<script type="text/javascript" src="' + item + '"></script>');
                    jsAdd += '<script type="text/javascript" src="' + item + '"></script>';
                    //appendAfter(scriptDom, jsTargetWrap[i+1]);
                }
                else if (item.match(/\.css$/i)) {
                    var cssDom = document.createElement('link');
                    cssDom.type = 'text/css';
                    cssDom.href = item;
                    cssDom.ref = 'stylesheet';
                    //$cssTarget.after('<link rel="stylesheet" type="text/css" href="' + item + '"></link>');
                    cssAdd += '<link rel="stylesheet" type="text/css" href="' + item + '"></link>';
                    //appendAfter(cssDom, cssTargetWrap[i+1]);
                }
            });
        }
    }
    jsAdd != '' ? $jsTarget.after(jsAdd) : null;
    cssAdd != '' ? $cssTarget.after(cssAdd) : null;
}

/**
 * @doc run code online
 * @author Heanes
 * @time 2016-12-22 19:36:23 周四
 */
;(function ($, window, document, undefined) {
    "use strict";
    var pluginName = 'runCodeOnline';

    var _default = {};
    _default.settings = {};

    var RunCodeOnline = function () {

    };


    /**
     * @doc 显示错误
     * @param message
     */
    var logError = function (message) {
        if (window.console) {
            window.console.error(message);
        }
    };
    /**
     * @doc jQuery写法
     * @param options
     * @param args
     * @returns {*}
     */
    $.fn[pluginName] = function (options, args) {
        var result;
        this.each(function () {
            var _this = $.data(this, pluginName);
            if (typeof options === 'string') {
                if (!_this) {
                    logError('Not initialized, can not call method : ' + options);
                }
                else if (!$.isFunction(_this[options]) || options.charAt(0) === '_') {
                    logError('No such method : ' + options);
                }
                else {
                    if (!(args instanceof Array)) {
                        args = [ args ];
                    }
                    result = _this[options].apply(_this, args);
                }
            }
            else if (typeof options === 'boolean') {
                result = _this;
            }
            else {
                $.data(this, pluginName, new RunCodeOnline(this, $.extend(true, {}, options)));
            }
        });
        return result || this;
    };
})(jQuery, window, document);