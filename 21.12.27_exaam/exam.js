const ar=new Array(100).fill(0)

 for(let i=0; i<ar.length;i++){
    if((i)%3==0){
        ar[i-1]=i
    }
    
}
console.log(ar)

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
for(let i=0;i<alphabet.length;i++){
    if(alphabet[i]!='a')
        alphabet[i]=alphabet[i-1]+=alphabet[i]        
    }
console.log(alphabet)

const aar=[]
let count=0
for(let i=0;i<999;i++){
    if((i)%3==0&&(i)%6!==0){
        aar[count]=i 
        count++
    }
    else if (i%6==0){
        aar[count]=null
        count++
    }
    
}
console.log(aar)

const alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function randomStr(n){
    const copy=[]
    for(let i=0;i<n;i++){
    copy[i]=alphabet1[Math.floor(Math.random()*alphabet1.length)]       
    }
    return copy
}
console.log(randomStr(3))
console.log(randomStr(5))
console.log(randomStr(7))

const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

const movies_copied = []
    for(let i=0;i<movies.length;i++){
        movies_copied[i]=[movies[i].title,movies[i].release]
    }


movies[1].title = 'syleemomo' // 원본배열 변경

console.log(movies)
console.log(movies_copied)

const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level'
]
let cnt=0
for(let word of words){
    if(isPalindrome(word)){
        cnt++
    }
}
console.log(cnt)

function isPalindrome(word) {
    let isRight=true
    for(let i=0;i<word.length/2-1;i++){
        if(word[i]===word[word.length-1-i]){       
            continue
        }
    else{
        return false
    }
    }
    return isRight
}