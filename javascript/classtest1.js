// 클래스 정의
class User{
    constructor(name){ // 클래스 생성자
        this.name = name; // this가 붙어있지 않은 변수는 지역변수이며 클래스끼리 공유하는 변수는 this가 붙어야 함
    }

    sayHello(){
        console.log(`Hello, ${this.name}`);
    }
}

let user = new User(`hong`); // 클래스 생성
user.sayHello(); // 특정 기능 호출