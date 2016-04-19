# Factory-method-pattern
##先放对于JavaScript工厂模式的理解，然后是相关代码练习
####1、对于这个概念的理解：  
（1）核心：由子类来实例化接口想要的类；子类可以对该接口方法进行重写  
     具体来说，举个例子：一个工厂里，有几个车间分别为鞋、包、衣（对应三个子类），和一个办公楼（对应接口），三个车间并不同时操作，  
     听候办公楼的指令。接口开始工作了（即办公楼收到请求了），比如要一个或一批包，那么制包车间开始工作，经过一系列流程产出包。 
     假如车间对之前的产包流程不满意，车间内部可以更改自己制包的流程，即重写方法。  
（2）用途：  
     a、对象的构建十分复杂（比如，想要一类包，但是从工厂得到包需要复杂工序）  
     b、需要依赖具体的环境创建不同的实例（比如，想要生产在party上用的包或者见长辈用的包等不同环境要求）  
     c、处理大量具有相同属性的小对象（比如，需要大批量同款的包或者鞋）
     （让子类定义需要创建的数据类型  
       对创建对象的流程赋值或者对象依赖很多设置文件的时候）  
（3）注意：  
    a、避免不必要使用，以免增加复杂度  
    b、创建工厂的时候，注释要写好当前工厂需要干什么，里面有什么小对象，比如，鞋，包等都要写清楚
     