/* menu_script.js */

$(function(){
	$("#main_nav > li > h3").click(function(){		//#main_nav > li > h3 클릭시

		//메뉴 클릭시 세부메뉴 여닫기 위함
		if($(this).parent("li").attr("class")=="active"){		//#main_nav > li > h3의 부모 클래스 li에 active클래스 있으면
			$(this).parent("li").removeClass("active");			//active클래스 remove
		}
		else{													//active 클래스 없다면
			$(this).parent("li").addClass("active");			//active클래스 add

		}
	});

	
	$("label.toggle_menu").click(function(){			//메뉴 펼쳐진 상태에서 햄버거버튼 눌러서 메뉴 껏다키면 메뉴 접혀진 상태로 보이도록
		$("#main_nav > li ").removeClass("active");

	});
});