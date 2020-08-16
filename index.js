let firstName = validateStringInput("Ваше имя?");
let secondName = validateStringInput("Ваша фамилия");
let lastName = validateStringInput("Ваше отчество");
let yourAge = validateNumberInput("Сколько вам лет");
let sexMan = confirm("Ваш пол - мужской?");
let ageDays = 365;
let afterYear = 5;
let pensionForm = "да";

if (sexMan) {
  gender = "Мужской";
} else {
  gender = "Женский";
}

if (yourAge >= 65 && gender === "Мужской") {
  pensionForm = "Да";
} else if (yourAge >= 55 && gender === "Женский") {
  pensionForm = "Да";
} else {
  pensionForm = "Нет";
}

function validateStringInput(message) {
  let string;
  do {
    string = prompt(message);
  } while (string === "" || string === null || !isNaN(+string));
  return string;
}

function validateNumberInput(message) {
  let num;
  do {
    num = prompt(message);
  } while (num === "" || num === null || isNaN(+num));
  return num;
}

alert(`Ваше имя: ${firstName}
Ваша фамилия: ${secondName}
Ваше отчество: ${lastName}
Ваш возраст в годах: ${yourAge}
Ваш возраст в днях: ${yourAge * ageDays}
Через 5 лет вам будет: ${+yourAge + afterYear}
Ваш пол: ${gender}
Вы на пенсии: ${pensionForm}`);

let s = prompt("Введите строку");
function vowelsRed(s) {
  let sa = s.toLowerCase().split("");
  let vs = "аеёиоуыэюя";

  let r = sa.reduce((sum, val) => {
    if (vs.indexOf(val) !== -1) {
      sum++;
    }
    return sum;
  }, 0);
  return r;
}
let rezault = vowelsRed(s);
alert("Количество гласных: " + rezault);
