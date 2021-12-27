//* 배열의 개념
// 배열을 사용하는 이유 (데이터 그룹핑)
const fruit1 = "apple"
const fruit2 = "banana"
const fruit3 = "orange"
const fruit4 = "watermelon"
const fruit5 = "strawberry"
//배열을 사용하지 않으면 변수를 여러개 사용해야 한다. 
const fruits = ["apple", "banana", "orange", "watermelon", "strawberry"]

//* 배열 타입 체크
//Array.isArray(타입검사에 사용할 변수)
Array.isArray(["apple", "orange", "banana"]);  // true
Array.isArray({name: 'syleemomo', age: 23}); // false
Array.isArray('syleemomo');   // false
Array.isArray(undefined);  // false
Array.isArray(null);  // false
Array.isArray(3);  // false

//* 자바스크립트 배열이 다른 프로그래밍 언어의 배열과 다른점
const mixedArray = [
    'apple', 3, undefined, [1,4, 7, 2], null, 
    {movieTitle: 'Harry potter', release: '2019-02-13'}, 3.131592]
    
//console.log(mixedArray)

//* 배열 생성방법 (리터럴, Array 생성자함수 사용과 차이점)
const fruits1 = []

fruits1[0] = 'apple'
fruits1[1] = 'banana'
fruits1[2] = 'orange'

for(let i=0; i<fruits1.length; i++){
    console.log('I like ', fruits1[i])
}

const fruits2 = ['apple', 'banana', 'orange']

for(let i=0; i<fruits2.length; i++){
    console.log('I like ', fruits2[i])
}

const fruits3 = [,,,]

for(let i=0; i<fruits3.length; i++){
    console.log('I like ', fruits3[i])
}

//Array 생성자 함수를 사용하는 방법

const fruits4 = new Array()

fruits4[0] = 'apple'
fruits4[1] = 'banana'
fruits4[2] = 'orange'

for(let i=0; i<fruits4.length; i++){
    console.log('I like ', fruits4[i])
}

const fruits5 = new Array('apple', 'banana', 'orange')

for(let i=0; i<fruits5.length; i++){
    console.log('I like ', fruits5[i])
}

const fruits6 = new Array(3)

for(let i=0; i<fruits6.length; i++){
    console.log('I like ', fruits6[i])
}

const fruits7 = new Array(3).fill(0)

for(let i=0; i<fruits7.length; i++){
    console.log('I like ', fruits7[i])
}

// 배열 요소 CRUD (배열요소 생성, 배열요소 조회, 배열요소 변경, 배열요소 삭제)
//딜리트문 주의사항:제한 배열요소에 다른 값들이 이동하는 것이 아니라 그대로 남아있고, 해당 인덱스에 대한 값만 제거된다
const movies = ['Harry Potter', 'Indiana Jhones', 'Jurassic Park', 'Iron man', 'Spider man']

movies[2] = 'Terminator'
delete movies[2]
console.log(movies)

//배열 참조 CRUD (참조, 참조변경, 참조 삭제)
const movies1 = ['Harry Potter', 'Indiana Jhones', 'Jurassic Park', 'Iron man', 'Spider man']

const movies1_copied = movies1

console.log(movies1_copied)

//참조값 변경
const movies2 = ['Harry Potter', 'Indiana Jhones', 'Jurassic Park', 'Iron man', 'Spider man']
const fruits10 = ['apple', 'banana', 'orange']

let movies2_copied = movies2
movies2_copied = fruits10

console.log(movies2_copied)

//배열 복사
//이렇게 하면 원본을 다른함수에 저장시키고 원본자체를 변경하여도 복사한 원본값은 그대로고, 원본만 수정가능 하다.
const movies11 = ['Harry Potter', 'Indiana Jhones', 'Jurassic Park', 'Iron man', 'Spider man']
const movies11_copied = [...movies11]

movies11[2] = null

console.log(movies11)
console.log(movies11_copied)