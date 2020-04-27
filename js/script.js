// 'use strict';

// let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     }
// }

// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,
//     chooseExpenses: function(){
//         for (let i = 0; i < 2; i++) {
//             let consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
//             let cost = +prompt("Во сколько обойдется?", "");
        
//             if ((typeof(consumption)) === 'string' && (typeof(consumption)) != null && (typeof(cost)) != null
//                 && consumption != '' && cost != '' && consumption.length < 50) {
//                     console.log("done");
//                 appData.expenses[consumption] = cost;
//             } else {
//                 console.log ("bad result");
//                 i--;
//             }
//         }
//     },
//     detectDayBudget: function() {
//         appData.budgetOneDay =  (appData.budget / 30).toFixed();
//         alert("Ежедневный бюджет: " + appData.budgetOneDay);
//     },
//     detectLevel: function() {
//         if (appData.budgetOneDay < 100) {
//             console.log("Минимальный уровень достатка");
//         } else if (appData.budgetOneDay > 100 && appData.budgetOneDay < 2000) {
//             console.log("Средний уровень достатка");
//         } else if (appData.budgetOneDay < 2000) {
//             console.log("Высокий уровень достатка");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     checkSavings: function() {
//         if (appData.savings == true) {
//             let save = +prompt("Какова сумма накоплений"),
//                 percent = +prompt("Под какой процент");
    
//             appData.monthIncome = save / 100 / 12 * percent;
//             alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//         }
//     },
//     chooseOptExpenses: function() {
//         for (let i = 0; i < 3; i++) {
//             let roster = prompt("№п/п", "");
//             let optionalСosts = prompt("Статья необязательных расходов?", "");
        
//             if ((typeof(roster)) === 'string' && (typeof(roster)) != null && (typeof(optionalСosts)) != null
//                 && roster != '' && optionalСosts != '' && roster.length < 50) {
//                     console.log("done");
//                 appData.optionalExpenses[roster] = optionalСosts;
//             } else {
//                 console.log ("bad result");
//                 i--;
//             }
//         }
//     },
//     chooseIncome: function() {
        
//         let items;

//         do {
//             items = prompt("Что принесет дополнительный доход (Перечислите через запятую)", "");
//         } while (items === undefined || items === null || items.length === 0);

//         appData.income = items.split(',');
//         appData.income.push(prompt("Может что-то еще?"));
//         appData.income.sort();

//         let income = appData.income;
        
//         for (let i = 0; i < income.length; i++) {
//             let index = i + 1;
//             alert("Способы доп. заработка: " + index + ': ' + income[i]);            
//         }

//         income.forEach(function (item, index) {
//             alert("Способы доп. заработка: " + (index + 1) + ': ' + item);
//         });

//         if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && items.length < 50) {
//             console.log("done");
//         } else {
//             console.log ("bad result");
//         }
//     }
// };

// // appData.chooseExpenses();
// // appData.detectDayBudget();
// // appData.detectLevel();
// // appData.checkSavings();
// // appData.chooseOptExpenses();
// // appData.chooseIncome();


// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ': ' + appData[key]);
// }