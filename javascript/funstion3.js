function Calculator(x, y){
    this.x = x;
    this.y = y;

    this.sum = function(){
        return this.x + this.y; // x, y로 해도 값이 나오는 이유는 파라미터의 값이 x, y이기 때문. 아래와 같이 a,b로 했을 때에는 에러가 발생함
    }

    this.mul = () => {
        return this.x * this.y;
    }
}

function Calculator(a, b){
    this.x = a;
    this.y = b;

    this.sum = function(){
        return x + y; // 에러 >> a, this.x는 다른 것.
    }

    this.mul = () => {
        return this.x * this.y;
    }
}

let calc = new Calculator(20, 10);
console.log(`sum=${calc.sum()}`);
console.log(`mul=${calc.mul()}`);
