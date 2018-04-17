var beta = false;

process.argv.forEach(function (val, index, array) {
    if(val === "--beta"){
        beta = true;
    }
});

if(beta) {
    require("./src/beta/index");
}else{
    require("./src/index");
}