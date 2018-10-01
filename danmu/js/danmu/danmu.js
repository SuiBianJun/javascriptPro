
class Barrage{

    constructor(id){
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(2, 2);
        this.barrageList = [];
        this.w = this.canvas.width;
        this.h = this.canvas.height;
    }

    shoot(v){
        //console.log('shoot');
        //this.ctx.fillText(v, 10, 100);

        let barrage = {
            msg: v,
            left: this.w / 2,
            height: this.getHeight(this.h / 2),
            speed: this.getSpeed()
        };
        //console.log(barrage.msg);
        //console.log(barrage.left);
        this.barrageList.push(barrage);

    }

    draw(){
        //console.log(this.barrageList.length);
        this.ctx.clearRect(0, 0, this.w, this.h);
        for(let i = 0; i < this.barrageList.length; i++){
            let t = this.barrageList[i];
            //console.log('draw' + t.left);
            if(t.left > - this.ctx.measureText(t.msg).width){
                this.drawText(t);
                t.left -= t.speed;
            }else{
                this.barrageList.splice(i, 1);
                i--;
            }
            //console.log(t.left);
            //t.left -= 2;
        }
        //if(this.barrageList.length > 0)
            requestAnimationFrame(this.draw.bind(this));
    }

    drawText(t){
        //console.log(t.msg);
        //this.ctx.scale(2, 2);
        this.ctx.fillText(t.msg, t.left, t.height);
        /*this.ctx.fillText(t.msg, t.left, 50);
        this.ctx.fillText(t.msg, t.left, 90);
        this.ctx.fillText(t.msg, t.left, 130);
        this.ctx.fillText(t.msg, t.left, 160);
        this.ctx.fillText(t.msg, t.left, 250);*/
    }

    getHeight(canvasHeight){
        let h = Math.ceil(Math.random() * 10);
        let gap = Math.ceil(canvasHeight / 12);
        return h * gap;
    }

    getSpeed(){
        let speed = Math.ceil(Math.random() * 3);

        return speed + 1;
    }

}

function doClear(){
    barrage.barrageList.splice(0, barrage.barrageList.length);
}

let barrage = new Barrage('dm');
barrage.draw();

let initBarrage = ['a', 'b', 'c', 'd', 'f', 'html', 'css', 'javascript'];

initBarrage.map(function (x) {
   barrage.shoot(x);
});

function doPush(){
    let dm = document.getElementById('dmContent');
    console.log(dm.value);
    barrage.shoot(dm.value);

    dm.value = '';
    //barrage.draw();
}


