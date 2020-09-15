
function fibonacci(num){
    var a = 1, b = 0, temp;
    var m = setInterval(function(){
        var temp;
        temp = a;
        a = a + b;
        b = temp;
        num--;
        if (num==0){
            clearInterval(m);
        }
        console.log(b);
    },100);

}
