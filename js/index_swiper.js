
function aaa(){
	var i=0;
	var l = $(".swiper_a").length;
	// console.log(l);
	// 轮播图1
	$(".swiper_a").eq(i).fadeIn().siblings().stop().fadeOut();
	function c_swiper(t){
		if(t){
			i=i+t;
		}
		if(i==l){
			i=0;
		}
		$(".swiper_a").eq(i).fadeIn().siblings().stop().fadeOut(500);
		$(".cri_a").eq(i).addClass("cricle_l").stop().siblings().removeClass("cricle_l");
	}
	// 计时器
	var swiper_timer = setInterval(c_swiper,2000,1);
	// 鼠标滑过icon 停止播放，跳转到当前页面
	function swiper_icon(){
		$(".cri_a").mouseover(function(){
			// console.log($(this).index());
			i=$(this).index();
			c_swiper();
			clearInterval(swiper_timer);
		})
		$(".cri_a").mouseout(function(){
			swiper_timer = setInterval(c_swiper,2000,1);
		})
	}
	swiper_icon();
}
aaa();

function bbb(){
	var j=0;
	var lb = $(".swiper_c").length;
	// 轮播图1
	function c_swiper2(h){
		if(h){
			j=j+h;
		}
		if(j==lb){
			j=0;
		}
		$(".swiper_c").eq(j).fadeIn().siblings().stop().fadeOut(500);
		$(".cri_b").eq(j).addClass("cricle_l").stop().siblings().removeClass("cricle_l");
	}
	// c_swiper2();
	// 计时器
	var swiper_timer2 = setInterval(c_swiper2,2000,1);
	// 鼠标滑过icon 停止播放，跳转到当前页面
	function swiper_icon2(){
		$(".cri_b").mouseover(function(){
			// console.log($(this).index());
			clearInterval(swiper_timer2);
			j=$(this).index();
			c_swiper2();
			
		})
		$(".cri_b").mouseout(function(){
			swiper_timer2 = setInterval(c_swiper2,2000,1);
		})
	}
	swiper_icon2();
}
bbb();

