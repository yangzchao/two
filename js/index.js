
$(function(){
	// 图片翻转
	$(".list_text").hover(function(){
		$(this).find(".correct").children().removeClass();
		$(this).find(".opposite").children().removeClass();
		$(this).find(".correct").children().addClass("test");
		$(this).find(".opposite").children().addClass('test2');
	},function(){
		$(this).find(".correct").children().removeClass();
		$(this).find(".opposite").children().removeClass();
		$(this).find(".correct").children().addClass("test2");
		$(this).find(".opposite").children().addClass('test');
	})
	// 图片切换 icon
	function point_img(){
		$(".point_img").click(function(){
			$(".point_img").eq($(this).index()).addClass("point_img_h").siblings().removeClass("point_img_h");
		})
	}
	point_img();
	// 游戏 分类
	$("#game_pos").click(function(){
		})
})
// 关闭游戏详情
$(".showtext_close").click(function(){
	$(".game_introduce").slideUp();
})
$(".list_text").click(function(){
	$(".game_introduce").slideDown();
})

// 游戏分页
var fy =0;
$(".point_img").click(function(){
	if(fy==$(this).index()){
		$(".list_mytext").addClass("bounceInLeft");
		fy=$(this).index();
	}else{
		$(".list_mytext").removeClass("bounceInLeft").addClass("bounceOutRight");
		fy=$(this).index();
		setTimeout(function(){
			$(".list_mytext").removeClass("bounceOutRight").addClass("bounceInLeft");
		},1000)
	}
	
})
