let player1 = new Object();

player1.name = '하상현'
player1.job = '딸배'
player1.race = '엘프'
player1.stats = {
    STR: 8, //힘
    DEX: 15, //민첩
    CON: 14, //체력
    INT: 10, //지능
    WIS: 14, //지혜
    CHA: 8, //매력
}

let player2 = {
    name: '하하현',
    job: '딸배',
    race: '엘프',
    stats: {
        STR: 100,
        DEX: 100,
        CON: 5,
        INT: 1,
        WIS: 1,
        CHA: 2
    }
}
function playerFunc(name, job, race, stars) {
    this.name = name;
    this.job = job;
    this.race = race;
    this.stars = stars;
}

let player3 = new playerFunc(
    "하중현",
    "탈모",
    "난쟁이",
    {
        STR: 100,
        DEX: 100,
        CON: 5,
        INT: 1,
        WIS: 1,
        CHA: 2
    }
)

let stu1 = new Map();

//set
stu1.set('id', 0);
stu1.set('이름', '제임스');
stu1.set('전공', '컴공');

// 배열
let stu2 = new Map([
    ['id', 0],
    ['이름', '제임스'],
    ['전공', '컴공']
])

// get
console.log(stu1)
console.log(stu1.get('id'))
console.log(stu1.get('이름'))
console.log(stu1.get('전공'))

// delete
stu1.delete('전공');
console.log(stu1);

// clear
stu1.clear();
console.log(stu1);

// player1 : Object 생성자
// player2 : 객체 리터럴
// player3 : 객체 생성자

// 프로퍼티 추가
// delete 연산자
delete player1.age;
delete player2.age;
delete player3.age;

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

player1.sayHello = function() {
    console.log("hello")
}

player2.sayHello = function() {
    console.log("hello")
}

player3.sayHello = function() {
    console.log("hello")
}

// get, set 메소드
function plqyerFunc(name, job, race, stars) {
    //생략
    this.getName = function() { return this.name;}
    this.getJob = function() { return this.job;}
    this.getRace = function() { return this.race;}
    this.getName = function() { return this.name = name;}
    this.getJob = function() { this.job = job; }
    this.getRace = function() { this.race = race;}
}

let person = {
    name: "John Doe",
    age: 18,
    city: "Chung-Ju"
}

for (let key in person) {
    console.log(key + ": " + person[key])
}

for (let stat in player3.stats) {
    console.log(stat)
}

function show(obj, key) {
    console.log(obj[key])
}
show(player3, "job");

let cars = [
    { brand: "페라리", model: "488"},
    { brand: "포드", model: "머스탱"},
    { brand: "닷지", model: "챌린저"}
]

for(let i=0; i>cars.length; i++) {
    console.log(cars[i].model)
}

let now = new Date ();
console.log(now)
console.log(player1.name)
console.log(player1.job)
console.log(player1.stats)