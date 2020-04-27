'use strict';

let
    food,
    clothes,
    budget = 10000,
    budgetOneDay = parseFloat((budget / 30).toFixed()),
    expenseInputs = document.querySelectorAll('.optionalexpenses-item');

let expensesItemBtn = document.querySelector('.expenses-item-btn');

expensesItemBtn.addEventListener("click", function () {
    let firstExpens = document.getElementById('expenses_1').value;
    let secondExpens = document.getElementById('expenses_3').value;
    document.querySelector('.expenses-value').textContent = firstExpens + ', ' + secondExpens;

    let foodCost = document.getElementById('expenses_2').value;
    let clothesCost = document.getElementById('expenses_4').value;
    food = foodCost;
    clothes = clothesCost;
});

function detectLevel() {
    if (budgetOneDay < 100) {
        return "Минимальный уровень достатка";
    } else if (budgetOneDay >= 100 && budgetOneDay < 2000) {
        return "Средний уровень достатка";
    } else if (budgetOneDay >= 2000) {
        return "Высокий уровень достатка";
    }

    return "Произошла ошибка";
}

let countBudgetBtn = document.querySelector('.count-budget-btn');

countBudgetBtn.addEventListener ('click', function () {
    document.querySelector('.budget-value').textContent = budget;
    document.querySelector('.daybudget-value').textContent = budgetOneDay;
    document.querySelector('.level-value').textContent = detectLevel();
});

let optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');

optionalExpensesBtn.addEventListener('click', function () {
    let element = document.querySelector('.optionalexpenses-value');

    let str = "";

    for (let i = 0; i < expenseInputs.length; i++) {
        const input = expenseInputs[i];
        
        let value = input.value;
        str = str + value + ", ";
    }

    element.textContent = str;
});

let startCalc = document.querySelector('#start');

startCalc.addEventListener('click', function () {
    let incomes = document.getElementById('income').value,
        chooseSum = document.getElementById('sum').value,
        choosePercent = document.getElementById('percent').value,
        monthSavings = chooseSum / 100 / 12 * choosePercent,
        yearSavings = chooseSum / 100 / 1 * choosePercent,
        daySavings = parseFloat((chooseSum / 100 / 365 * choosePercent).toFixed());

    document.querySelector('.income-value').textContent = incomes;
    document.querySelector('.monthsavings-value').textContent = monthSavings;
    document.querySelector('.yearsavings-value').textContent = yearSavings;
    document.querySelector('.year-value').value = yearSavings;
    document.querySelector('.month-value').value = monthSavings;
    document.querySelector('.day-value').value = daySavings;
});
