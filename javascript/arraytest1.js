let arr =[10, 20, 30, 40];
// 특정 값을 삭제하고자 한다면 삭제한 다음 전체를 다시 뿌려주었는데, 그렇다면 리액트를 쓰는 의미가 없음.
// 태그에 배열을 바라보게 두고 static 변수로 두면 태그랑 렌더링이 같이 일어나기 때문에 배열의 데이터를 삭제하면 알아서 삭제됨
// 그래서 배열과 관련된 것을 잘 다룰 수 있어야 함


// (배열).splice(a, b) : a부터 b개만큼 삭제함
//console.log(arr.length);
//delete arr[1]; // 이렇게 삭제는 가능하나 첫 번째 부분은 비어있음
console.log(arr.length);
//arr.splice(1,1); // 배열의 특정 요소 삭제, 삭제의 용도로 많이 사용하며 대체로도 사용 가능 / 첫 번째 요소부터 1개를 삭제함
console.log(arr);
arr.splice(1, 2, 100, 200); // 첫 번째 요소부터 2개를 지우고 그 공간에 100, 200으로 대체하겠다.
console.log(arr);

// 100과 200 사이에 300, 400을 삽입
arr.splice(2, 0, 300, 400); // 2번째 요소에서 삭제는 0개, 300/400을 추가로 넣음
console.log(arr);


// (배열).slice(a, b) : a번 인덱스부터 b번 인덱스 이전까지 부분 요소 가져오기
let narr=[10,20,30,40,50,60,70,80];
let subarr = narr.slice(2, 5);
console.log(narr);
console.log(subarr);



// (배열).concat(배열) : 두 개의 배열을 이어 붙이는 것
let arr2=[1,2];
let totarr = arr2.concat(3,4);
console.log(arr2);
console.log(totarr);

let arr3=[10, 20];
let totarr2 = arr2.concat(arr3); 
console.log(totarr2);

let totarr4=arr2.concat(3,4, [5,6],arr3); // 하나씩 || 배열을 만들어서 || 배열 자체를 넣어도 하나의 배열로서 합쳐짐
console.log(totarr4);
