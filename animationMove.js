/**
 * Created by dcave on 9/7/2016.
 */
function move(){
    var elem = document.getElementById("animation");
    var elem2 = document.getElementById("animation2");
    var forward = 1;
    var forward2 = 1;
    var x = 0;
    var y = 0;
    var x2 = 0;
    var y2 = 390;
    var id = setInterval(frame, 10);
    var currentColorCode = '#00008b';
    function frame(){
        if (x == 350 && forward == 1){
            forward = 0;
        }
        else if(forward == 0 && x != 0){
            x--;
            y--;
            elem.style.top = y + 'px';
            elem.style.left = x + 'px';
        }
        else if(forward == 0 && x == 0){
            forward = 1;
        }
        else{
            x++;
            y++;
            elem.style.top = y + 'px';
            elem.style.left = x + 'px';
        }

        if(x2 == 390 && forward2 == 1){
            forward2 = 0;
        }
        else if(forward2 == 0 && x2 != 0){
            x2 = x2 - 2;
            y2 = y2 + 2;
            elem2.style.top = y2 + 'px';
            elem2.style.left = x2 + 'px';
        }
        else if(forward2 == 0  && x2 == 0){
            forward2 = 1;
        }
        else{
            x2 = x2 + 2;
            y2 = y2 - 2;
            elem2.style.top = y2 + 'px';
            elem2.style.left = x2 + 'px';
        }

        if (((x2 > x) && (x2 < (x + 50))) && ((y2 > y) && (y2 < (y + 50)))){
            elem.style.background = generateColorCode();
        }
    }

    function generateColorCode(){
        var colorCode = '#';
        for(var i = 0; i < 3; i++){
            var temp = Math.floor((Math.random() * 256)).toString(16);
            if (temp.length < 2){
                temp = '0' + temp;
            }
            colorCode += temp;
        }

        return colorCode;
    }
}