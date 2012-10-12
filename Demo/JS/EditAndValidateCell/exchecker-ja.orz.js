(function($) {
  $.exValidationRules = $.extend($.exValidationRules, {
    chkORZ1: [
      '例: 123.34', 
      /^(?:(0|(?:[1-9](?:\d{0,2})?))(?:(\.)(\d{1,2}))?)?$/    // 0 <= value < 1000(小数第2位まで)、または、空文字
    ]
  });
})(jQuery);
