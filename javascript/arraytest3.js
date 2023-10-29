let arr=['사과', '오렌지', '바나나'];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


// 향상된 for문처럼 사용한다
// f는 요소를 의미
for(let f of arr){
    console.log(f);
}
// idx는 인덱스를 의미(key가 없기 때문에 인덱스를 의미함)
for(let idx in arr){
    console.log(arr[idx]);
}


// 배열이 아닌 객체를 위한 용도로 사용하기 위해 in이 존재함. key는 map의 key말함
let info={name:'hong', age:30, nickname:'honghong'};
for(let key in info){
    console.log(key, info[key]);
}