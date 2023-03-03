// ! Array of objects- sort by key value
let user = [
  { name: "Вася",  age: 52 },
  { name: "Петя",  age: 41 },
 { name: "Маша",  age: 31 },
]

function sortByAge(arr) {
 arr.sort((a, b) => a.age > b.age ? 1 : -1 )
}
sortByAge(user)

//! Transform array of Objects in another array of obj
let user = [
  { name: "Вася", surname: "Пупкин", id: 1 },
  { name: "Петя", surname: "Иванов", id: 2 },
 { name: "Маша", surname: "Петрова", id: 3 },
]

let names = user.map(item => item.name)

let mapped = user.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}))


//! Operator 'OR'
//? Graphic: Open or closed 


let date = new Date()
let day = date.getDay()
let time = date.getHours()

if (day === 6 || day === 7 || time < 10 || time > 18) {
  alert('we are closed')
} else {
  alert('welcome')
}

//! For - continue
for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;
  console.log(i);
}
  //вывндит не парные числа

 //! Metka for Continue/break
 outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}

alert('Готово!'); 


//! Prototypes - наследоавние

const Person = {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  greet() {
  alert('hi')
  },
  }

const man = Object.create(Person).constructor('den', 32);
 
// new prototype with added params
const Woman = Object.create(Person);

Woman.constructor = function(name, age, skills) {
  Person.constructor.apply(this, arguments);

  this.skills = skills;
  return this;

}

const woman = Object.create(Woman).constructor('lena', 32, ['html', 'css'])
console.log(woman);