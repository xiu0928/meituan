var i=0;
var timer;
$(document).ready(function(){
	$(".ig").eq(0).show().siblings().hide()
			showTime();
		$(".tab").hover(function(){
			i=$(this).index()
			show();
			clearInterval(timer);//清除轮播
		},function(){
			showTime();
		});
		$(".fenye1").click(function(){
			clearInterval(timer);//清除轮播
			if(i==0){
				i=5
			}
			i--;
			show()
			showTime()
		});
		$(".fenye2").click(function(){
			clearInterval(timer);//清除轮播
			if(i==4){
				i=-1
			}
			i++;
			show()
			showTime()
		});
	function show(){
		$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
	}
	function showTime(){
		timer=setInterval(function(){
			i++;
			if(i==4){i=0};
			show()
				},3000)
	}
	// $(".ig").mouseover(function(){
	// 	 $(".fanye").fadeIn();
	// });
	// $(".ig").mouseout(function(){
	// 	 $(".fanye").fadeOut();
	// });
	$(".lunbo_a").hover(function(){
            $(".fanye").fadeIn();
        },function(){
            $(".fanye").fadeOut();
        })


//	二级菜单
	$(".header-r li").hover(
		function(){
			$(this).find("ul").fadeIn(200);
		},function(){
			$(this).find("ul").fadeOut(300);
		}
	);
	$(".nav-ul li").hover(
		function(){
			$(this).find("div").fadeIn(0);
		},function(){
			$(this).find("div").fadeOut(0);
		}
	);



});