// First
const first = document.getElementById("first");
const tempCel = 36;
const tempFar = (9 / 5) * tempCel + 32;

first.addEventListener("click", () =>
  alert(`Цельсия: ${tempCel}, Фаренгейта: ${tempFar}`)
);
// Second
const second = document.getElementById("second");
let admin = "";
let name = "Василий";

admin = name;

second.addEventListener("click", () => console.log(admin));

// Third
const third = document.getElementById("third");

const var1 = 10 + 10 + "10"; // 10+10=20, 20+"10" приведение типов и конкатенация строк = "2010"
const var2 = 10 + "10" + 10; // 10 + "10" приведение типов и конкатенация = "1010", "1010" + 10 приведение и конкатенация = "101010"
const var3 = 10 + 10 + +"10"; // 10+10=20, 20+ (+"10") плюс перед строкой приведет строку к числу в итоге будет 20 + 10 = 30
const var4 = 10 / -""; // - перед пустой строкой приведет к нулю, 10/-0 = -Infinity
const var5 = 10 / +"2,5"; // + перед строкой, которую нельзя привести к числу из за запятой, а не точки приведет к Nan, 10/Nan = Nan

third.addEventListener("click", () =>
  console.log([var1, var2, var3, var4, var5])
);
