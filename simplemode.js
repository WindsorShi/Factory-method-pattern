
//这是简单工厂模式（就是根据环境来调用不同的类返回不同的对象结果）

var XMLHttpFactory=function(){};//这个工厂类就是一个单例
XMLHttpFactory.createXMLHttp=function(){//在这个工厂类下面有createXMLHttp这么一个方法
	var XMLHttp=null;
	//XMLHttpFactory.createXMLHttp（）这个方法根据当前环境的具体情况
	//来返回一个XMLHttpRequest()对象

	if (window.XMLHttpRequest) {
	//Ajax对象由XMLHttpRequest创建
		XMLHttp=new XMLHttpRequest()
	}//如果是正常的XML的对象，那么就返回XMLHttpRequest这个对象
	elseif (window.ActiveXObject) {
		XMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
	}//如果是微软的浏览器，那么就返回一个Microsoft.XMLHTTP对象
	return XMLHttp;
};

   var AjaxHander=function(){
   	var XMLHttp=XMLHttpFactory.createXMLHttp();
   	// 具体操作
   }
