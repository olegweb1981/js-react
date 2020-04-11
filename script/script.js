'use strict';
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}; 

let consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = prompt("Во сколько обойдется?", "");

appData.expenses[consumption] = cost;

consumption = prompt("Введите обязательную статью расходов в этом месяце", "");
cost = prompt("Во сколько обойдется?", "");

appData.expenses[consumption] = cost;

console.log(appData);

let month = 30;
let budgetOneDay = appData.budget / month;

alert(budgetOneDay);