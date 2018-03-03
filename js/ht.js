var aside = function () {
	var ofather1 = document.getElementById("father1");
	var ofather2 = document.getElementById("father2");
	var ofather3 = document.getElementById("father3");
	var otest1 = document.getElementById("test1");
	var otest2 = document.getElementById("test2");
	var otest3 = document.getElementById("test3");
	ofather1.onmouseover = function () {
        otest1.style.display = "block" ;
	}
	ofather1.onmouseout = function () {
        otest1.style.display = "none" ;
	}
	ofather2.onmouseover = function () {
        otest2.style.display = "block" ;
	}
	ofather2.onmouseout = function () {
        otest2.style.display = "none" ;
	}
	ofather3.onmouseover = function () {
        otest3.style.display = "block" ;
	}
	ofather3.onmouseout = function () {
        otest3.style.display = "none"
	}
	otest1.onmouseover = function () {
		otest1.style.display = "block" ;
	}
	otest1.onmouseout = function () {
		otest1.style.display = "none" ;
	}
	otest2.onmouseover = function () {
		otest2.style.display = "block" ;
	}
	otest2.onmouseout = function () {
		otest2.style.display = "none" ;
	}
	otest3.onmouseover = function () {
		otest3.style.display = "block" ;
	}
	otest3.onmouseout = function () {
		otest3.style.display = "none" ;
	}
	// console.log(getComputedStyle(otest3).display);
}
var btn1 = function () {
    var obtn1 = document.getElementById("btn1");
    var octp= document.getElementById("ctp");
    // alert(octp.style.left+"px");
    obtn1.onclick = function () {
        var newpt;
    	if(octp.style.left ==  "975px" ||octp.style.left ==  "0px"){
    		var newpt = -5850;
    		octp.style.left = newpt+"px";
    	}
    	else{
    		var newpt = parseInt(octp.style.left)+975;
    	    octp.style.left = newpt+"px";
    	}

    }
}
var btn2 = function () {
    var obtn2 = document.getElementById("btn2");
    var octp= document.getElementById("ctp");
    // console.log(typeof(getComputedStyle(octp).width));
    obtn2.onclick = function () {
        var newpt;
    	if(octp.style.left ==  "-5850px" ){
    		var newpt = 0;
    		octp.style.left = newpt+"px";
    	}
    	else{
    		var newpt = parseInt(octp.style.left)-975;
    	    octp.style.left = newpt+"px";
    	}
    }
}
var list1 = function () {
	var octp= document.getElementById("ctp");
	
	var allist = document.getElementById("ctb").getElementsByTagName("span");
	allist[0].onclick = function () {
        octp.style.left = "0px";
        allist[0].style.setProperty('font-weight','bold');
        for(i = 0;i < allist.length;i++){
        	if(i == 0){
        		continue;
        	}
        	else{
        		allist[i].style.setProperty('font-weight','normal');
        	}
        }
   }
   allist[1].onclick = function () {
        octp.style.left = "-975px";
        allist[1].style.setProperty('font-weight','bold');
        for(i = 0;i < allist.length;i++){
        	if(i == 1){
        		continue;
        	}
        	else{
        		allist[i].style.setProperty('font-weight','normal');
        	}
        }
   }
   allist[2].onclick = function () {
        octp.style.left = "-1950px";
        allist[2].style.setProperty('font-weight','bold');
        for(i = 0;i < allist.length;i++){
        	if(i == 2){
        		continue;
        	}
        	else{
        		allist[i].style.setProperty('font-weight','normal');
        	}
        }
   }
   allist[3].onclick = function () {
        octp.style.left = "-2925px";
        allist[3].style.setProperty('font-weight','bold');
        for(i = 0;i < allist.length;i++){
        	if(i == 3){
        		continue;
        	}
        	else{
        		allist[i].style.setProperty('font-weight','normal');
        	}
        }
   }
   allist[4].onclick = function () {
        octp.style.left = "-3900px";
        allist[4].style.setProperty('font-weight','bold');
        for(i = 0;i < allist.length;i++){
        	if(i == 4){
        		continue;
        	}
        	else{
        		allist[i].style.setProperty('font-weight','normal');
        	}
        }
   }
   allist[5].onclick = function () {
        octp.style.left = "-4875px";
        allist[5].style.setProperty('font-weight','bold');
        for(i = 0;i < allist.length;i++){
        	if(i == 5){
        		continue;
        	}
        	else{
        		allist[i].style.setProperty('font-weight','normal');
        	}
        }
   }
   allist[6].onclick = function () {
        octp.style.left = "-5850px";
        allist[6].style.setProperty('font-weight','bold');
        for(i = 0;i < allist.length;i++){
        	if(i == 6){
        		continue;
        	}
        	else{
        		allist[i].style.setProperty('font-weight','normal');
        	}
        }
   }

}
var img = function () {
    //创建XMLHttpRequest对象。
    var picture = document.getElementById('ctp').getElementsByTagName('img')
    var xmlhttp = null;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
    }
//连接服务器
    xmlhttp.open("GET","http://rapapi.org/mockjs/32053/mockjs/32053/?",true);
//发送数据或请求
    xmlhttp.send();
//监听响应状态
    xmlhttp.onreadystatechange=function(){  
        if(xmlhttp.readyState==4){ //连接服务器成功
            //判断服务器响应的HTTP状态码
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
            //解析响应文本 （json） content（js）
            var image = JSON.parse(xmlhttp.responseText);//把JSON对象转化伟原生的JavaScript
            //document.getElementById("container").innerHTML = xmlhttp.responseText;  //以字符串的形式返回
           picture[0].src = image.Apicture;
           picture[1].src = image.Bpicture;
           picture[2].src = image.Cpicture;
           picture[3].src = image.Dpicture;
           picture[4].src = image.Epicture;
           picture[5].src = image.Fpicture;
           picture[6].src = image.Gpicture;
            }else{
                alert("请求失败");
            }
        }
    }
}
var right = function () {
        var message = {
            "major" : [{"one":"阿里设计师：如何用动效创新方法","two":"版本控制工具 Abstract 是如何提升设计","three":"腾讯干货！虚拟To B支付设计研究之设","four":"用户体验和可用性之间的联系和差异","five":"学会这简单几招，字体设计也能萌","six":"腾讯干货！虚拟To B支付设计研究","seven":"如何打造极简设计？来看英才APP"},
            {"one":"36氪产品总监：求职应该怎么问答","two":"想转职成为用户体验设计师？你得","three":"系列三部曲！中国式草根设计师的","four":"系列三部曲！中国式草根设计师的","five":"这些好习惯塑造了优秀而专业的用","six":"成功通过Uber 的设计挑战面试后，","seven":"设计稿总监都通过了，前端哥哥却"},
            {"one":"优设新年专题！2018年最值得阅读","two":"优设年度盘点专题！2017年最受欢","three":"优设年度盘点专题！2017年最受欢","four":"优设年度盘点专题！2017年最受欢","five":"优设年度盘点专题！2017年最受欢","six":"超全面！海报设计零基础学习指南","seven":"从信黑体到腾讯字体，优设专访顶"}
            ]
        } //json数据
        var obj = eval(message);
        var span = document.getElementById('ospan').getElementsByTagName('span');
        var oa = document.getElementById('text').getElementsByTagName('a');
        span[0].onmouseover = function () {
            oa[0].innerHTML = obj.major[0].one;
            oa[1].innerHTML = obj.major[0].two;
            oa[2].innerHTML = obj.major[0].three;
            oa[3].innerHTML = obj.major[0].four;
            oa[4].innerHTML = obj.major[0].five;
            oa[5].innerHTML = obj.major[0].six;
            oa[6].innerHTML = obj.major[0].seven;
        }
        span[1].onmouseover = function () {
            oa[0].innerHTML = obj.major[1].one;
            oa[1].innerHTML = obj.major[1].two;
            oa[2].innerHTML = obj.major[1].three;
            oa[3].innerHTML = obj.major[1].four;
            oa[4].innerHTML = obj.major[1].five;
            oa[5].innerHTML = obj.major[1].six;
            oa[6].innerHTML = obj.major[1].seven;
        }
        span[2].onmouseover = function () {
            oa[0].innerHTML = obj.major[2].one;
            oa[1].innerHTML = obj.major[2].two;
            oa[2].innerHTML = obj.major[2].three;
            oa[3].innerHTML = obj.major[2].four;
            oa[4].innerHTML = obj.major[2].five;
            oa[5].innerHTML = obj.major[2].six;
            oa[6].innerHTML = obj.major[2].seven;
        }
}
     

window.onload = function () {
    img();
	btn1();
	btn2();
	console.log('a');
	aside();
	list1();
    right();
	console.log('a');
}
 
    
    
