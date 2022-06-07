// Первое задание
// {
//   //пример 1
//   let a = 1,
//     b = 1,
//     c,
//     d;
//   c = ++a;
//   alert(c); // ответ: 2 — Перед присвоение выполняется оператор увилечения на 1

//   //пример 2
//   d = b++;
//   alert(d); //ответ: 1 — Присвоение происходит до увелечения на 1

//   //пример 3
//   c = 2 + ++a;
//   alert(c); //ответ: 5 По очередности сначала выполняется ++a и а=3 после чего выполняется сложение с = 5

//   //пример 4
//   d = 2 + b++;
//   alert(d); //ответ: 4 тоже самое, что и в 3 примере
//   alert(a); //3 а увеличивался на 1 два раза
//   alert(b); //3 тоже самое
// }

// Второе задание
{
  let a = 2;
  let x = 1 + (a *= 2);

  // Выражение в скобках выполняется первым, наибольший приоритет
  // a = a * 2 — a=4
  // x = 1 + 4 — x=5
}

// Третье задание
{
  let a = 2;
  let b = 3;
  if (a >= 0 && b >= 0) {
    console.log(a - b);
  } else if (a < 0 && b < 0) {
    console.log(a * b);
  }

  if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    console.log(a + b);
  }
}

//Четвертое

/**
 *
 * @param {number} a Первый аргумент
 * @param {number} b Второй аргумент
 * @returns {number} Возвращаемое значение
 */
const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const mult = (a, b) => a * b;
const division = (a, b) => {
  return a / b;
}; // Для соблюдения обязательного условия задания

//Пятое

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case (operation = sum):
      return sum(arg1, arg2);
    case (operation = diff):
      return diff(arg1, arg2);
    case (operation = mult):
      return mult(arg1, arg2);
    case (operation = division):
      return division(arg1, arg2);
    default:
      return "wrong operation";
  }
}

console.log(mathOperation(1, 2, sum));

//Шестое

const number = prompt("Введите число");

if (Number(number.split("")[number.split("").length - 1]) === 1) {
  alert(`Ваша сумма в ${number} рубль успешно зачислена.`);
} else if (
  Number(number.split("")[number.split("").length - 1]) === 2 ||
  Number(number.split("")[number.split("").length - 1]) === 3 ||
  Number(number.split("")[number.split("").length - 1]) === 4
) {
  alert(`Ваша сумма в ${number} рубля успешно зачислена.`);
} else {
  alert(`Ваша сумма в ${number} рублей успешно зачислена.`);
}
