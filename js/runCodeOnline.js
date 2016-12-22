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