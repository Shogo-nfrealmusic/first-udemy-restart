const arry = [1,2,3,4,5,6,7,8,9,10];

function forEach(ary, callback) {
    for (let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(arry, function(val) {
    val = val * 2;
    log(val);
});