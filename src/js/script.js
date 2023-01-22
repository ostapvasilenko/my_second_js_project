// let fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "pear",
//   "grape",
//   "pineapple",
//   "strawberry",
//   "watermelon",
//   "kiwi",
//   "mango",
//   "peach",
//   "lemon",
//   "lime",
//   "blueberry",
//   "raspberry",
//   "blackberry",
//   "apricot",
//   "cherry",
//   "coconut",
//   "fig",
//   "pomegranate",
//   "plum",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
// ];

// const pos = fruits.indexOf('mulberry')
// const target = fruits[-2];

// console.log(`I like ${target}`);
// if (target <= 0 ) {
//   console.log(`POMYLKA!!!!`)
// } 


// let counter = fruits.length;
// while (counter > 0){
//   if (fruits[counter]){
// console.log
//   }
//   console.log(fruits[counter]);
//   counter--;
// }
// console.log(fruits)





// let counter = 0;
// fruits.forEach(function (item) {
//   if (item[0] == "a") {
//     console.log(item);
//     counter++;
//   }
// });

// console.log(counter)


// let familyList = [
//   {
//     name: "John Doe",
//     age: 25,
//   },
//   {
//     name: "Jane Doe",
//     age: 24,
//   },
//   {
//     name: "Jack Doe",
//     age: 18,
//   },

//   {
//     name: "Janifer Doe",
//     age: 14,
//   },
//   {
//     name: "Sem Doe",
//     age: 24,
//   },
// ];

// familyList.forEach(function (item) {
//   if (item.age > 21){
//     console.log(item)
//   }
// })



//Personal data of users

const usersData = [
  {
      name: 'John',
      age: 25,
      surname: 'Doe',
      fatherName: 'Smith'
  },
  {
      name: 'Jane',
      age: 30,
      surname: 'Doe',
      fatherName: 'Sarah'
  },
  {
      name: 'Jack',
      age: 28,
      surname: 'Doe',
      fatherName: 'John'
  },
  {
      name: 'Jill',
      age: 32,
      surname: 'Doe',
      fatherName: 'Monica'
  }
]

// 1. Persinal data of users
const userData = [
  {
    name: "John",
    age: 25,
    surname: "Doe",
    fatherName: "Smith",
  },
  {
    name: "Jane",
    age: 30,
    surname: "Doe",
    fatherName: "Sarah",
  },
  {
    name: "Jack",
    age: 28,
    surname: "Doe",
    fatherName: "John",
  },
  {
    name: "Jill",
    age: 32,
    surname: "Doe",
    fatherName: "Monica",
  },
];
let counter = 0;

function getInitialsUser(surname, name, fatherName) {
    counter++;
    if(counter <= 3){
        return surname + " " + name[0] + "." + fatherName[0] + ".";
    }else{
        return "Functiom is called more than 3 times"
    } 
}

function displayAlertInputText(text){
    alert(text);
}


usersData.forEach((user) => {
  const userInitials = getInitialsUser(
    user.surname,
    user.name,
    user.fatherName
  );
  console.log(userInitials + " " + user.age);
});

// Input data to diplay in alert
const inputText = prompt("Enter text to display in alert");
displayAlertInputText(inputText);





                                                              
