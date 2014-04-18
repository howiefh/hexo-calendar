var helper = hexo.extend.helper;
var calendar = require('./calendar');
helper.register('current_month_calendar', calendar.current_month_calendar);
