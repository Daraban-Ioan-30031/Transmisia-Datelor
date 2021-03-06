function getFibonacci(n) {
    let n1 = 0, n2 = 1, next;
    if (typeof n != 'number') return 'not allowed';
    if (n<1 || n > 10) return 'not allowed';
    console.log(n2);

    if (n === 2){
        console.log(n2);
    }else {next = n1 + n2;

        while (next <= n) {

            console.log(next);

            n1 = n2;
            n2 = next;
            next = n1 + n2;
        }
    }
}
console.log(getFibonacci(2));
console.log(getFibonacci(5));
console.log(getFibonacci('Hello'));