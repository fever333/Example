function getAll() {
  let firstName = validateStringInput("Ваше имя?");
  let secondName = validateStringInput("Ваша фамилия");
  let lastName = validateStringInput("Ваше отчество");
  let yourAge = validateNumberInput("Сколько вам лет");
  let sexMan = confirm("Ваш пол - мужской?");
  let ageDays = 365;
  let afterYear = 5;
  let pensionForm = "да";

  sexMan ? (gender = "Мужской") : (gender = "Женский");

  if (
    (yourAge >= 65 && gender === "Мужской") ||
    (yourAge >= 55 && gender === "Женский")
  ) {
    pensionForm = "Да";
    // } else if (yourAge >= 55 && gender === "Женский") {
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

  let text = prompt("Введите любой текст");
  let letters = ["а", "е", "у", "ю", "и", "э", "я", "о", "ы", "ё"];
  let score = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (text[i] === letters[j]) {
        score += 1;
        break;
      }
    }
  }

  alert(`Количество гласных: ${score}`);
}

getAll();

let a = prompt("Введите первое значение X:"),
  b = prompt("Введите второе значение X:"),
  c = prompt("Введите третье значение X:"),
  arr = calc(a, b, c),
  d = arr[0];
alert("Дискриминант: " + d);
alert(
  d < 0
    ? "Корней нет"
    : d === 0
    ? "Один корень: " + arr[1]
    : `Два корня: ${arr[1]} и ${arr[2]}`
);

function calc(a, b, c) {
  let dis = (a, b, c) => b * b - 4 * a * c;
  let d = dis(a, b, c);
  if (d < 0) return [d];

  let x1 = (-b + Math.sqrt(d)) / (2 * a),
    x2 = (-b - Math.sqrt(d)) / (2 * a);

  return [d, x1, x2];
}
