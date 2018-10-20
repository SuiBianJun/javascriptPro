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

window.onload = function () {
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