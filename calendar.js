exports.current_month_calendar = function(options) {
  // 获取文章发布的时间
  var now = new Date(this.page.date);
  var c_year = now.getFullYear();
  var c_month = now.getMonth()+1;

  var posts = this.site.posts,
    root = this.config.root,
    html = "";
  //本月份最后一天是几号
  var final_date = new Date(c_year,c_month,0).getDate();

  //本月的显示天数
  for(var j=0;j<final_date;j++){        
    html+='<span>'+(j+1)+'</span>';
  }

  //当月的posts
  var month_posts = posts.find({date: {$year: c_year, $month: c_month}});
  month_posts.each(function(post){ 
	var day = post.date.date();
	//当天文章数
    var length = month_posts.find({date: {$year: c_year, $month: c_month, $day: day}}).length;
	if (length > 1) {
	  // 加span 的最后一个字母避免再替换一次
      html = html.replace("n>"+day+"<",'n><a href="' + root + post.path + '" title="当天有' + length + '篇博客,第一篇:' + post.title + '">' + day + '</a><');
	} else {
      html = html.replace(">"+day+"<",'><a href="' + root + post.path + '" title="' + post.title + '">' + day + '</a><');
    }
  });
  return html;
};
