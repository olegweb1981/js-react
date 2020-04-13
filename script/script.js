'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// Version one

for (let i = 0; i < 2; i++) {
    let consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
    let cost = +prompt("Во сколько обойдется?", "");

    if ((typeof(consumption)) === 'string' && (typeof(consumption)) != null && (typeof(cost)) != null
        && consumption != '' && cost != '' && consumption.length < 50) {
            console.log("done");
        appData.expenses[consumption] = cost;
    }
}

// // Version two

// let i = 0;
// while (i < 2) {

//     let consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let cost = +prompt("Во сколько обойдется?", "");

//     if ((typeof(consumption)) === 'string' && (typeof(consumption)) != null && (typeof(cost)) != null
//         && consumption != '' && cost != '' && consumption.length < 50) {
//             console.log("done");
//         appData.expenses[consumption] = cost;
//     }

//     i++;
// }

// Version thre

// let i = 0;

// do {
//     let consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let cost = +prompt("Во сколько обойдется?", "");

//     if ((typeof(consumption)) === 'string' && (typeof(consumption)) != null && (typeof(cost)) != null
//         && consumption != '' && cost != '' && consumption.length < 50) {
//             console.log("done");
//         appData.expenses[consumption] = cost;
//     }

//     i++;
// }
// while (i < 2);

appData.budgetOneDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.budgetOneDay);

if (appData.budgetOneDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.budgetOneDay > 100 && appData.budgetOneDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.budgetOneDay < 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}