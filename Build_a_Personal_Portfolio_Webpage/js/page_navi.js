
/*let item_container =  document.getElementById('item_container');
console.log(item_container.style.height);*/

//let input_username = document.getElementById('id_input_username');


function addSpan(parent, child, msg) {

    child.innerHTML = msg;
    child.className += "class_span_over_message";

    /*child.innerHTML = "aaa";*/
    parent.appendChild(child);

    /*console.log(child.offsetTop);*/

}

function removeSpan(parent, child){
    child.className = "";
    child.style.top = 10 + "px";
    parent.removeChild(child);
}

function moveSpan(child) {

    console.log('moveSpan');
    let timer = null;
    clearInterval(timer);
    let speed = 5;
    timer = setInterval(function () {
        if(child.offsetTop < 1){
            clearInterval(timer);
        }else{
            child.style.top = child.offsetTop - speed + "px";
        }
    }, 50);
}

function addClass(tag, className) {
    tag.className += " " + className;
}

function removeClass(tag, className) {
    //let className_regexp = new RegExp("(\\s|^)" + className + "(\\s|$)");
    //console.log(className_regexp);
    tag.className = tag.className.replace("current", "");
}

function setScrollTop(top) {
    document.documentElement.scrollTop = top;
}

let over_message = document.getElementsByClassName('class_over_message');
let class_input_message = document.getElementsByClassName('class_input_message');
//let button_form_submit = document.getElementById('button_form_submit');

let span = [document.createElement('span'), document.createElement('span'), document.createElement('span'), document.createElement('span')];

let flag = [1, 1, 1, 1];
let spanMessage = ["Name", "Email", "Phone Number", "Message"];

console.log("over_message : " + over_message.length);

window.onload = function () {

    console.log("over_message : " + over_message.length);

    for(let i = 0; i < class_input_message.length; i++){

        class_input_message[i].onfocus = function () {
            span[i].style.color = "rgb(114, 40, 114)";
        };

        class_input_message[i].onblur = function () {
            span[i].style.color = "rgb(170, 170, 170)";
        };

        class_input_message[i].oninput = function () {

            if (class_input_message[i].value.length > 0 && flag[i] === 1) {
                addSpan(over_message[i], span[i], spanMessage[i]);
                flag[i] = 0;
                moveSpan(span[i]);
                /*over_message[i].style.visibility = "";*/
            } else if(class_input_message[i].value.length === 0){
                /*over_message[i].style.visibility = "hidden";*/
                removeSpan(over_message[i], span[i]);
                flag[i] = 1;
            }
        };
    }

    let oli = document.getElementsByTagName('li');
    let nav = document.getElementsByClassName('item');
    for(let i = 0; i < oli.length; i++){
        /*console.log(oli[i].className);
        removeClass(oli[i], "current");*/

        oli[i].onclick = function () {
            //alert(i);
            addClass(oli[i], 'current');

            setScrollTop(nav[i].offsetTop);

            for(let j = 0; j < oli.length; j++){
                if(j !== i){
                    removeClass(oli[j], "current");
                }
            }
        };

    }

    window.onscroll = function () {
        let scrollTopLength = document.documentElement.scrollTop || document.body.scrollTop;
        let nav = document.getElementsByClassName('item');
        let currentItem = 0;
        for(let i = 0; i < nav.length + 1; i++){

            //console.log(scrollTopLength + "===" + nav[i].offsetTop);

            /*for(let j = 0; j < oli.length; j++){
                removeClass(oli[i], "current");
            }*/

            //console.log(scrollTopLength + "---" + nav[i].offsetTop);

            if(i !== nav.length && scrollTopLength>= nav[i].offsetTop){
                //continue;
            }else{
                currentItem = i - 1;
                break;
            }
        }

        console.log(currentItem);

        //addClass(oli[currentItem], "current");

        for(let j = 0; j < oli.length; j++){
            //if(j !== currentItem){
                console.log("removeClass: " + j);
                removeClass(oli[j], "current");
            //}
        }

        addClass(oli[currentItem], "current");
    }
};

/*window.onload = function () {
    window.onscroll = function () {
        let scrollTopLength = document.documentElement.scrollTop || document.body.scrollTop;

        console.log(scrollTopLength);

        let oli = document.getElementsByTagName('li');

        for(let i = 0; i < oli.length; i++){
            console.log(oli[i].offsetTop);
        }
    };
};*/

