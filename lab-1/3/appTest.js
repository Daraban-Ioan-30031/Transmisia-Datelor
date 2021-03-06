function test(){
    console.log(sum(0)==0?'Passed':'Failed');
    console.log(sum(0)==3?'Passed':'Failed');
    console.log(sum(0)==10?'Passed':'Failed');
    console.log(sum(0)=='n is undefined'?'Passed':'Failed');
    console.log(sum('asd')=="not a number"?'it is a string':'it is a number');
    console.log(sum('Hello')==="not a number"?'it is a string':'it is a number');
    console.log(sum(true)==="not a number"?'it is a boolean':'it is a number');
    console.log(sum(false)==="not a number"?'it is a boolean':'it is a number');
}
test();