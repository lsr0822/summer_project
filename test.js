/*const userName="홍길동"
const isLoggedIn=true;

let age=25;
let score =0;*/

/*function greet(name) {
    return `안녕하세요,${name}님`;

};
const greet =(name) =>{
    return `안녕하세요,${name}님`;
};

const greet =(name)=>`안녕하세요,${name}님`;*/

/*const name="김철수";
const age =30;
const message =`안녕하세요,${name}님 나이는 ${age}세입니다.`;*/

/*const user={name:"김철수",age:30,city: "서울"};
const {name,age}=user;*/

/*const number=[1,2,3];
const newNumbers=[...number,4,5];

const user={name:"김철수",age:30};
const newUser={...user,city:"서울"};*/

const students=[
    {name:"김철수",score:85},
    {name:"이영희",score:92},
    {name:"박민수",score:78}
];

const anmes=students.map(student=>student.name);
const highScores=studnts.filter(student=>student.score>=80);
const topStudent=students.find(student=>stuent.score>=90);

const age=20;
if(age>=18){
    console,log("성인입니다");
}else{
    console.log("미성년자입니다");

}
const status =age>=18?"성인":"미성년자";

const fruits=["사과","바나나","오렌지"];
for(const fruit of fruits){
    console.log(fruit);
}

fruits.forEach(fruit=>{console,log(fruit);

});


