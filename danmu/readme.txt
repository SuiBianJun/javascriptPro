弹幕墙第一版：
1、requestAnimationFrame(callback);
window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。
该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用
<html>
<p id="test-p" style="font-size: 14px">aaaa</p>
</html>

<script>
let p = document.getElementById('test-p');
console.log(p.offsetLeft);

function draw(){
    p.style.left = p.offsetLeft + 2 + 'px';
    if(p.offsetLeft < 900)
    requestAnimationFrame(draw.bind(window));
}

requestAnimationFrame(draw.bind(window));
</script>

2、使用canvas的函数measureText(msg).width 获得内容的宽度

3、分割canvas, 随机生成弹幕的高度。设置随机速度

4、使用<canvas class = "screen" id="dm" width="1000px" height="600px" style="width: 500px; height: 300px"></canvas>
,设置真实width、height为设置的两倍实现去除文字模糊。

5、