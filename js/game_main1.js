$(function(){
	// //屏幕缩放
	// function resize() {
	//    var ratioX = $(window).width() / 1920;
	//    var ratioY = $(window).height() / 944;
	//    $("body").css({
	//       transform: "scale(" + ratioX + "," + ratioY + ")",
	//    });
	//    $("html").css({'overflow':'hidden'})
	// }
	 
	// $(window, document).resize(function () {
	//    resize();
	// });
	// resize();
	// 获取页面的宽高
	function H_W(){
		var h=$(window).height();
		var w=$(window).width();
		// var w = $(window).watch();
		$(".swiper-wrapper").css({"height":h,"width":w});
		// console.log(w);
		// console.log(w);
		$(window).resize(function(){
			h =$(window).height();
			w=$(window).width();
			$(".swiper-wrapper").css({"height":h,"width":w});
			// console.log(h);
		})
	}
	H_W();
	// 第一个盒子
	// 第一个效果图
	bg1();
	function bg1(){
		var bg1 = setInterval(function(){
			$(".game_box12").fadeToggle(500);
			// console.log(1)
		},1000);
		var changePage = setInterval(function(){
			$(".changePage").fadeToggle(800);
			// console.log(1)
		},810);
	}
	// 轮播图，页面索引值
	var gamePage = 0;
	function game_mainIndex(){
		game_swiper.on('slideChangeTransitionEnd',function(){
			gamePage = game_swiper.activeIndex;
			// console.log(gamePage);
			gameText1();
			// siblings
			//$(".nav_b").eq(gamePage).children("nav_a").eq(gamePage).addClass("nav_active");
		})
	}
	game_mainIndex();
	
	function gameText1(){
		if(gamePage==0){
			$(".game_test").addClass("swing");
		}else{
			$(".game_test").removeClass("swing");
		}
		// 第二页
		if(gamePage==1){
			$(".game_box22").fadeIn(800);
		}else{
			$(".game_box22").fadeOut(10);
		}
		// 第三页bounce
		if(gamePage==2){
			$(".bg_blue").slideDown(500);
			$(".game_box3_peo").show(1500);
			$(".tiandihui").show(1000);
			$(".bg_people").fadeIn(2000);
		}else{
			$(".bg_blue").slideUp();
			$(".tiandihui").hide();
			$(".bg_people").hide();
			$(".game_box3_peo").hide();
		}
		// 第四页
		if(gamePage==3){
			$(".peo_list").fadeIn(1000);
		}else{
			$(".peo_list").hide()
		}
		// 第五页
		if(gamePage==4){
			$(".tongEatSwiper").slideDown(500);
		}else{
			$(".tongEatSwiper").hide()
		}
		// 第六页
	}
	// 点击滑动鼠标切换到下一页
	$(".changePage").click(function(){
		 game_swiper.slideNext();
	})
	// 返回顶部 即返回第一页
	$(".GoToTop").click(function(){
		game_swiper.slideTo(0, 1200, true);
	})
	
	// 轮播图
	function ccc(){
		var k=0;
		var lc = $(".game_box23_img").length;
		// 轮播图1
		function c_swiper3(h){
			if(h){
				k=k+h;
			}
			if(k==lc){
				k=0;
			}
			$(".game_box23_img").eq(k).stop(k-1).fadeIn().siblings().fadeOut(500);
			if(k==0){
				$(".box23_icon").eq(k).addClass("box23_icon10").siblings().removeClass("box23_icon11 box23_icon12");
			}if(k==1){
				$(".box23_icon").eq(k).addClass("box23_icon11").siblings().removeClass("box23_icon10 box23_icon12");
			}if(k==2){
				$(".box23_icon").eq(k).addClass("box23_icon12").siblings().removeClass("box23_icon10 box23_icon11");
			}
			
		}
		// c_swiper2();
		// 计时器
		var swiper_timer3 = setInterval(c_swiper3,2000,1);
		// 鼠标滑过icon 停止播放，跳转到当前页面
		$(".box23_icon1").mouseover(function(){
			// console.log($(this).index());
			clearInterval(swiper_timer3);
			console.log(2)
		})
		$(".box23_icon1").mouseout(function(){
			swiper_timer2 = setInterval(c_swiper3,2000,1);
			console.log(1)
		})
		$(".box23_icon").click(function(){
			// console.log($(this).index());
			clearInterval(swiper_timer3);
			k=$(this).index();
			c_swiper3();
			console.log($(this).index())
		})
	}
	ccc();
	var game_box3 = setInterval(game_box3img,100,1)
	var p =0;
	var p_l = $(".game_box3_img").length;
	 // console.log($(".game_box3_img").length)
	function game_box3img(t){
		p =p+t;
		if(p==p_l){
			p=0;
		}
		// console.log(p);
		$(".game_box3_img").eq(p).css("opacity","1").siblings().css("opacity","0");
	}
	//第五页
	var tongEatNetPre = setInterval(function(){
		$(".btns").fadeToggle(900);
	},910)
	
	//音乐播放
	var mp = 0;
	var myMp3 = document.getElementById("myMp3");
	setTimeout(function(){
		myMp3.play();
	},50)
	
	$(".playMusic").click(function(){
			if(mp==0){
				$(".playMusic").css({"background-position":"0px -34px","animation":"false","-webkit-animation":"false"});
				myMp3.pause();
				mp=1;
			}else{
				myMp3.play();
				$(".playMusic").css({"background-position":"0 0","animation":"spin 4s linear infinite","-webkit-animation":"spin 4s linear infinite"});
				mp=0;
			}
	})
	$(".daohang").click(function(){
		$(".menubox").animate({"width":"0","width":"729px"},800);
		console.log(1)
	})
	$(".btn_sq").click(function(){
		$(".menubox").animate({"width":"729px","width":"0px"},800);
	})
	$(".nav_list li").click(function(){
		game_swiper.slideTo($(this).index(), 1000, true);
	})
})