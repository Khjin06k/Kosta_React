let fruits=['banana'];
let arr = fruits;
console.log(arr==fruits); // true, 동일한 주소값을 참조 (데이터가 같다는 의미가 아닌 fruits의 주소값을 arr에도 부여함)

// 배열의 앞에 요소를 추가하는 것은 unshift / 뒤에서 빼는것은 pop / 앞에서 빼는것은 shift / 뒤에 추가하는 것은 push
fruits.push('orange'); // fruits에 요소 삽입, arr에 넣은 것이 아닌데 값이 동일함. 즉, 'banana'가 들어간 배열은 1개이고 2개의 변수가 참조한다는 의미, 동일한 주소값을 가짐
console.log(arr);
console.log(arr==fruits);


// 가져온 데이터를 변경 인지하게 하기 위해 전개 연산자를 많이 사용함
let carr = [...fruits]; //전개 연산자(배열의 깊은 복사) : 새로운 배열을 생성했고 거기의 데이터를 fruits에 있는 모든 데이터를 가져오겠다는 의미
fruits.push('strawberry');
console.log(carr);
console.log(fruits);
console.log(carr==fruits); // false, 데이터를 가져오는 것이지 주소를 참조하는 것이 아님.