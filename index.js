



let firstName = prompt('Ваше имя?')
let secondName = prompt('Ваша фамилия')
let lastName = prompt('Ваше отчество')
let yourAge = prompt('Сколько вам лет')
let sexMan = confirm('Ваш пол - мужской?')
let sexWooman = confirm('Ваш пол - женский?')
let confirmSexMan = 'Мужской'
let confirmSexWooman = 'Женский'
let ageDays = 364
let afterYear = 5
// let pensionForm = 'да'

if (sexMan === true) {
  sexGender = 'Мужской'
} else {
  sexGender = 'Женский'
}

if (sexGender === 'Мужской') {
  yourAge < 65
  pensionForm = 'Да'
  
} else {
  pensionForm = 'Нет'
}

if (sexGender === 'Женский') {
  yourAge < 55
  pensionForm = 'Да'

} else {
  pensionForm = 'Нет'
}


alert(`Ваше имя: ${firstName}\n` + ` Ваша фамилия: ${secondName}\n` + ` Ваше отчество: ${lastName}\n` + ` Ваш возраст в годах: ${yourAge}\n` + ` Ваш возраст в днях: ${yourAge * ageDays}\n` + ` Через 5 лет вам будет: ${+yourAge + afterYear}\n`  + ` Ваш пол: ${sexGender}\n` + ` Вы на пенсии: ${pensionForm}`)













// alert(alert(1)||2||alert(3))


// циклы
// let age = 1;
// while (age < 30) {
//     console.log(`Мне ${age} лет`);
//     age++;
// }

// let age = 1;
// do {
//     console.log(`Мне ${age} лет`);
//     age++;
// } while (age < 30);


// for (let age = 0; age < 30; age++) {
//     console.log(`Мне ${age} лет`);
// }

// for (let i = 0; 1 < 10; i++) {
//     if(i % 2 === 0) { 
//         break;
//     }
//     console.log(i);
// }


// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert("Маловато");
//         case 4:
//             alert("В точку!");
//             case 5:
//                 alert("Перебор");
//                 default:
//                     alert("Нет таких значений");
// }


// let frutis = ["Яблоко" , "Апельсин" , "Слива"];

// console.log(frutis[0]);
// console.log(frutis[1]);
// console.log(frutis[2]);

// console.log("length", frutis.length);

// let frutis = ["Яблоко" , "Апельсин" , "Слива"];
// frutis.pop();
// console.log(frutis);

// let fruits = ["Яблоко", "Апельсин"]
// fruits.push ("Груша");
// alert(fruits);

// alert(fruits.shift());
// alert(fruits);

// let arr = ["Яблоко" , "Апельсин" , "Слива"];

// for (let i = 0; i < arr.length; i++); {
// console.log(arr[i]);
// }





// let name = "philipp";



// // name = prompt(age + '' + lastName)


// let lastName = prompt('Введите фамилию')
// alert(name + ' ' + lastName)


// let a = 10
// let b = 5
// let c = 2

// if ( a > b) {
// console.log('будет 2')
// }
// else {
//     (a < b)
//     console.log ('Будет не 2')
// }
    
// let name = 'Ваше имя?'
// let lastName = 'Ваш возраст'


// prompt(name)
// prompt (lastName)

// if(name = NaN || name) {
//     name

// } else {

// }

// var name = requestTextInput("Как тебя зовут?");
// var age = requestTextInput("Сколько тебе лет?");

// if (age < 18) {
//     alert('Здарова, ' + name + '. Как твои ' + age + '?');
// } else {
//     alert('Привествую, ' + name + '. Уж ' + age + ' лет прошло');
// }

// function requestTextInput(message) {
//     var input;
//     do {
//         input = prompt(message, '');
//     } while (input === null || input === '');
//     return input;
// }

// let name = 'Ваше имя?'
// let lastName = 'Ваша фамилия'
// let secondName = 'Ваше отчество'
// let age = 'сколько вам лет?'
// let sex = 'Ваш пол?'


// let name = ['Ваше имя?', 'Ваша фамилия', 'Ваше отчество', 'сколько вам лет?', 'Ваш пол?']






// if (yourAge > 55) {
// pensionForm = 'Да'

// } else {
//   pensionForm = 'Нет'
// }


// while (ageDays) {
//   (ageDays * 4) + 1

// }



// while (ageDays) {
//   ageDays * 4 + 1
// }


// var name = requestTextInput("Как тебя зовут?");
// var age = requestTextInput("Сколько тебе лет?");

// if (age < 18) {
//     alert('Здарова, ' + name + '. Как твои ' + age + '?');
// } else {
//     alert('Привествую, ' + name + '. Уж ' + age + ' лет прошло');
// }

// function requestTextInput(message) {
//     var input;
//     do {
//         input = prompt(message, '');
//     } while (input === null || input === '');
//     return input;
// }



// function firstName (message) {
//     let firstName
//     do {
//         firstName = prompt(message, '')
//     } while (firstName === '')
//     return firstName
// }


// let name = prompt()

// if (name = 0) {
//     alert(0)
// } if (name > -1) {
//     alert(-1)
// } else {
//     (name < 1)
//     alert(1)
// }

// let name = prompt('Введите число', 0);

// if (name > 0) {
//   alert( 1 );
// } else if (name < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }




// let name = prompt('Whats the официальное название JavaScript?')

// if (name === 'ECMAScript') {
//     alert('Правильно')
// } else {
//     (name === '')
//     alert('You dont know?')
// }


// function requestTextInput(message) {
//     var input;
//     do {
//         input = prompt(message, '');
//     } while (input === null || input === '');
//     return input;
// }
// if (firstName === undefined) {
//     return firstName
// }


// if (sexMan === true) {
//     confirmSexMan ||  (sexMan === false) 
//     confirmSexWooman
// } 


// if (sexMan = true) {
//         confirm(`${sexMan}`) 
//     } else { sexWooman = false
//         confirm(`${sexWooman}`)
//     } 
    







// if (sexMan) {sexMan = true
//     alert('Ваш пол мужской')
// } else {
//     sexWooman = false
//     alert('Ваш пол женский')
// }






// let [0] = prompt(name[0])
// prompt(name[1])
// prompt(name[2])
// prompt(name[3])

// alert([0] + [1] + [2] + [3])

// confirm(name[4])




// for (let names of name) {
//     console.log(name)
// }

// let counter = 0
// setInterval(function() {
//     console.log(++counter)
// }, 1000)


// function requestTextInput(message) {
//     do {
//         input = prompt(message, '')
//     } while (input === null || input === '')
// }



// prompt(name, lastName, secondName)
