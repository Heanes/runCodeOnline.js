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
    '../js/resource/codeMirror/5.21.0/lib/codemirror.js',
    // 代码高亮之主题
    '../js/resource/codeMirror/5.21.0/theme/3024-day.css',
    '../js/resource/codeMirror/5.21.0/theme/3024-night.css',
    '../js/resource/codeMirror/5.21.0/theme/abcdef.css',
    '../js/resource/codeMirror/5.21.0/theme/ambiance-mobile.css',
    '../js/resource/codeMirror/5.21.0/theme/ambiance.css',
    '../js/resource/codeMirror/5.21.0/theme/base16-dark.css',
    '../js/resource/codeMirror/5.21.0/theme/base16-light.css',
    '../js/resource/codeMirror/5.21.0/theme/bespin.css',
    '../js/resource/codeMirror/5.21.0/theme/blackboard.css',
    '../js/resource/codeMirror/5.21.0/theme/cobalt.css',
    '../js/resource/codeMirror/5.21.0/theme/colorforth.css',
    '../js/resource/codeMirror/5.21.0/theme/dracula.css',
    '../js/resource/codeMirror/5.21.0/theme/duotone-dark.css',
    '../js/resource/codeMirror/5.21.0/theme/duotone-light.css',
    '../js/resource/codeMirror/5.21.0/theme/eclipse.css',
    '../js/resource/codeMirror/5.21.0/theme/elegant.css',
    '../js/resource/codeMirror/5.21.0/theme/erlang-dark.css',
    '../js/resource/codeMirror/5.21.0/theme/hopscotch.css',
    '../js/resource/codeMirror/5.21.0/theme/icecoder.css',
    '../js/resource/codeMirror/5.21.0/theme/isotope.css',
    '../js/resource/codeMirror/5.21.0/theme/lesser-dark.css',
    '../js/resource/codeMirror/5.21.0/theme/liquibyte.css',
    '../js/resource/codeMirror/5.21.0/theme/material.css',
    '../js/resource/codeMirror/5.21.0/theme/mbo.css',
    '../js/resource/codeMirror/5.21.0/theme/mdn-like.css',
    '../js/resource/codeMirror/5.21.0/theme/midnight.css',
    '../js/resource/codeMirror/5.21.0/theme/monokai.css',
    '../js/resource/codeMirror/5.21.0/theme/neat.css',
    '../js/resource/codeMirror/5.21.0/theme/neo.css',
    '../js/resource/codeMirror/5.21.0/theme/night.css',
    '../js/resource/codeMirror/5.21.0/theme/panda-syntax.css',
    '../js/resource/codeMirror/5.21.0/theme/paraiso-dark.css',
    '../js/resource/codeMirror/5.21.0/theme/paraiso-light.css',
    '../js/resource/codeMirror/5.21.0/theme/pastel-on-dark.css',
    '../js/resource/codeMirror/5.21.0/theme/railscasts.css',
    '../js/resource/codeMirror/5.21.0/theme/rubyblue.css',
    '../js/resource/codeMirror/5.21.0/theme/seti.css',
    '../js/resource/codeMirror/5.21.0/theme/solarized.css',
    '../js/resource/codeMirror/5.21.0/theme/the-matrix.css',
    '../js/resource/codeMirror/5.21.0/theme/tomorrow-night-bright.css',
    '../js/resource/codeMirror/5.21.0/theme/tomorrow-night-eighties.css',
    '../js/resource/codeMirror/5.21.0/theme/ttcn.css',
    '../js/resource/codeMirror/5.21.0/theme/twilight.css',
    '../js/resource/codeMirror/5.21.0/theme/vibrant-ink.css',
    '../js/resource/codeMirror/5.21.0/theme/xq-dark.css',
    '../js/resource/codeMirror/5.21.0/theme/xq-light.css',
    '../js/resource/codeMirror/5.21.0/theme/yeti.css',
    '../js/resource/codeMirror/5.21.0/theme/zenburn.css',
    // --代码高亮之全屏编辑
    '../js/resource/codeMirror/5.21.0/addon/display/fullscreen.css',
    '../js/resource/codeMirror/5.21.0/addon/display/fullscreen.js',
    // --代码高亮之显示鼠标当前所在行
    '../js/resource/codeMirror/5.21.0/addon/selection/active-line.js',
    // -- 代码高亮之括号匹配
    '../js/resource/codeMirror/5.21.0/addon/edit/matchbrackets.js',
    // --代码高亮之
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

    var jsList = [];
    var cssList = [];
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
                    //jsList.unshift('<script type="text/javascript" src="' + item + '"></script>');
                    //appendAfter(scriptDom, jsTargetWrap[i+1]);
                }
                else if (item.match(/\.css$/i)) {
                    var cssDom = document.createElement('link');
                    cssDom.type = 'text/css';
                    cssDom.href = item;
                    cssDom.ref = 'stylesheet';
                    //$cssTarget.after('<link rel="stylesheet" type="text/css" href="' + item + '"></link>');
                    cssAdd += '<link rel="stylesheet" type="text/css" href="' + item + '"></link>';
                    //cssList.unshift('<link rel="stylesheet" type="text/css" href="' + item + '"></link>');
                    //appendAfter(cssDom, cssTargetWrap[i+1]);
                }
            });
        }
    }
    /*$.each(jsList, function (i, item) {
        $jsTarget.after(item)
    });
    $.each(cssList, function (i, item) {
        $cssTarget.after(item)
    });*/
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

    // @todo 1.新窗口打开；2.全屏编辑；3.纯文本显示代码；4.是否显示行号；5.是否自动换行；6.格式化代码
    // @see https://github.com/aramk/crayon-syntax-highlighter

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