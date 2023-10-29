// 함수이면서 클래스
// 생성자 함수 : 대문자로 시작하며 new 연산자를 붙여 실행함
function User(name){
    this.name = name;
    this.isAdmin = false;

    // return this; 
    // 암묵적으로 생략하더라도 this를 반환하기 때문에 아래에서 name과 isAdmin을 접근해 사용 가능함
}

let user = new User('hong');
console.log(user.name);
console.log(user.isAdmin);