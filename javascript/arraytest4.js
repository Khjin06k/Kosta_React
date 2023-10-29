let arr=['사과', '오렌지', '바나나'];

arr.forEach(function(item, index, array){
    console.log(`${item}, ${index}, ${array}`);
    //console.log(item); // 요소
    // console.log(index); // 인덱스
    // console.log(array); // 배열
});



// find : 앞에서부터 조건을 만족하는 데이터 1개를 찾는다
// filter : 조건을 만족하는 모든 데이터를 찾는다 (배열 타입)

let users=[{id:1, name:'John', age:15}, {id:2, name:'Pete', age:20}, {id:3, name:'Mary', age:25}, {id:4, name:'Mary', age:30}];
// find의 리턴값은 true나 false로 find가 true인 것을 찾아서 출력해주는 것
// 1개만 찾는 코드이기 때문에 배열로 가져오지 않음
let user1 = users.find(function(item){ // 만약 인덱스만 사용하더라도 item을 써줘야 함, array를 사용할거면 item/index를 써줘야 함
    return item.id==1; // id가 1인 것을 찾아서 반환, 앞에서부터 true인 것을 찾아서 반환
});
console.log(user1);

let user2 = users.find(function(item){ // 만약 인덱스만 사용하더라도 item을 써줘야 함, array를 사용할거면 item/index를 써줘야 함
    return item.name=='Mary'; // id가 1인 것을 찾아서 반환, 앞에서부터 true인 것을 찾아서 반환
});
console.log(user2); // 앞에서부터 1개만 찾아옴

let user3 = users.filter(function(item){ // 만약 인덱스만 사용하더라도 item을 써줘야 함, array를 사용할거면 item/index를 써줘야 함
    return item.name=='Mary'; // id가 1인 것을 찾아서 반환, 앞에서부터 true인 것을 찾아서 반환
});
console.log(user3); // true인 것을 모두 찾아오기 떄문에 여러개 출력 >> 배열로 출력됨


let user20=users.filter(function(item){
    return item.age>=20 && item.age<30;
})
console.log(user20);


let usersp = users.map(function(item){
    item.age++;
    return item;
})
console.log(usersp);

users.sort(function(item1, item2){
    return item2.age-item1.age;
})
console.log(users)