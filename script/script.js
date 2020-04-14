'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// Version one

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
        let cost = +prompt("Во сколько обойдется?", "");
    
        if ((typeof(consumption)) === 'string' && (typeof(consumption)) != null && (typeof(cost)) != null
            && consumption != '' && cost != '' && consumption.length < 50) {
                console.log("done");
            appData.expenses[consumption] = cost;
        } else {
            console.log ("bad result");
            i--;
        }
    }
}

chooseExpenses();

// // Version two

// let i = 0;
// while (i < 2) {
//     let consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let cost = +prompt("Во сколько обойдется?", "");

//     if ((typeof(consumption)) === 'string' && (typeof(consumption)) != null && (typeof(cost)) != null
//         && consumption != '' && cost != '' && consumption.length < 50) {
//             console.log("done");
//         appData.expenses[consumption] = cost;
//     } else {
//         console.log ("bad result");
//         i--;
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
//     } else {
//         console.log ("bad result");
//         i--;
//     }

//     i++;
// }
// while (i < 2);

function detectDayBudget() {
    appData.budgetOneDay =  (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет: " + appData.budgetOneDay);
}

detectDayBudget()

function detectLevel() {
    if (appData.budgetOneDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.budgetOneDay > 100 && appData.budgetOneDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.budgetOneDay < 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let roster = prompt("№п/п", "");
        let optionalСosts = prompt("Статья необязательных расходов?", "");
    
        if ((typeof(roster)) === 'string' && (typeof(roster)) != null && (typeof(optionalСosts)) != null
            && roster != '' && optionalСosts != '' && roster.length < 50) {
                console.log("done");
            appData.optionalExpenses[roster] = optionalСosts;
        } else {
            console.log ("bad result");
            i--;
        }
    }
}

chooseOptExpenses();