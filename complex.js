//这是一个抽象工厂（可以覆盖里边的方法）
var XMLHttpFactory=function(){};

//假如是简单工厂下面这个createFactory对象就会开始工作
//但这是抽象工厂，会把这个对象当做一个入口，比如执行到这儿让它干活，它会报错
//也就是说不能被实例化，只能用来派生子类
XMLHttpFactory.prototype={
	createFactory:function(){
		throw new Error('This is an abstract class');
	}
}//也就是说不能被实例化，只能用来派生子类


var XHRHandler=function(){
	XMLHttpFactory.call(this);//call(this)之后就覆盖了之前的，用这个XHRHandler
};

XHRHandler.prototype=new XMLHttpFactory();
//把XMLHttpFactory()对象挂载到XHRHandler的prototype上

XHRHandler.prototype.constructor=XHRHandler;
//将原型指定为自己（XHRHandler），到这里就基本实现了重新定义createFactory方法

XHRHandler.prototype.createFactory=function(){
	var XMLHttp=null;
if (window.XMLHttpRequest) {
	//Ajax对象由XMLHttpRequest创建
		XMLHttp=new XMLHttpRequest()
	}//如果是正常的XML的对象，那么就返回XMLHttpRequest这个对象
	elseif (window.ActiveXObject) {
		XMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
	}//如果是微软的浏览器，那么就返回一个Microsoft.XMLHTTP对象
	return XMLHttp;
};