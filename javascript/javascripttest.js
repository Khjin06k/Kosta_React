
let user = {id:10, name:'John', age:30};
let {id, name, age} = user;

// user에 있는 id를 아래 id 변수에 넣겠다는 것
// user의 값을 아래 name에 넣겠다는 것
// user의 age를 아래 age에 넣겠다는 것

console.log(id);
console.log(name); // 이것과 가장 가까운 것을 가져오기는 하지만 해당 이름이 어딘가에서 사용되고 있다는 의미로 주의를 주는 것
console.log(age);

let [a,b,c] = [10,20,30];

// 객체에 있는 값을 하나하나 따로 담을 때 사용