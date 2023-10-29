function Person(name, age){
    this.name = name;
    this.age = age;

    // function형 클래스에서 메서드를 선언할 떄
    this.info = function(){
        return `이름:${this.name}, 나이:${this.age}`;
    }

    // this.info = ()=>{} // 이와 같이 선언도 가능
}

let person = new Person('hong', 20);
console.log(person.info()); // 선언 방식은 차이가 있지만 사용 방식은 동일함