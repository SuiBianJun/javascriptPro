
1、固定div到浏览器某个位置
属性：position: fixed;

2、导航栏模块实现
窗口滚动事件：window.onscroll

a、获取当前页面顶端在网页的偏移位置：
document.documentElement.scrollTop || document.body.scrollTop;

根据页面顶端偏移位置 与 需要导航的页面内容 的offsetTop值比较，
改变导航条 对应的class属性

(在绝对定位中, 通过改变top值来改变offsetTop值)

b、点击导航条，设置页面的scrollTop值为对应页面内容的offsetTop值，实现跳转

3、页面内动画效果

绝对定位+加偏移值

动画效果：
var timer = null;
timer = setInterval(function(){// 修改class，实现动画效果}, time)// time: 执行间隔
清楚timer：clearInterval(timer);

4、注册input事件

onfocus： 获得焦点
onblur: 丢失焦点
oninput: 输入触发

5、添加和删除class

6、添加指针hover动作：

.className:hover{// 动作}

7、table中td平分tr
设置table属性： table-layout: fixed;