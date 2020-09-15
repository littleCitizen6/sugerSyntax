
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

function onlyDual(arrs){
    var newArrs = [];
    for (var i =0; i<arrs.length; i++){
        newArrs.push([]);
        arrs[i].filter(num => num%2==0).forEach(num => newArrs[i].push(num));
    }
    return newArrs;
}