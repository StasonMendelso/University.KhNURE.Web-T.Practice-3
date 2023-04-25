const isNumber = new RegExp("^\\d+$");

function task1() {
    let money = prompt("Введіть початкову суму грошей");
    console.log(isNumber.test(money));
    console.log(money < 1000);
    if (!isNumber.test(money) || money < 1000) {
        alertInvalidData();
        return;
    }
    let years = prompt("Введіть кількість років");
    if (!isNumber.test(years) || years < 1) {
        alertInvalidData();
        return;
    }
    let percentage = prompt("Введіть відсоток за рік");
    if (!isNumber.test(percentage) || percentage > 100) {
        alertInvalidData();
        return;
    }

    let sum = parseInt(money);
    for (let i = 1; i <= years; i++) {
        sum = sum + sum * (percentage / 100);
    }

    let totalProfit = sum - money;

    function hasFraction(number) {
        return Math.floor(number) - number !== 0;
    }

    let result = String("");
    result += "Початкова сумма: " + money + '\n';
    result += "Кількість років: " + years + '\n';
    result += "Відсоток року: " + percentage + '\n';
    result += "Загальний прибуток: ";
    if (hasFraction(totalProfit)) {
        result+= (totalProfit).toFixed(2) + '\n';
    }else {
        result+= (totalProfit) + '\n';
    }
    result += "Загальна сума: " ;
    if (hasFraction(sum)) {
        result+= + sum.toFixed(2);
    }else {
        result+= + sum.toFixed(2);
    }
    alert(result);
}

function alertInvalidData() {
    alert("Invalid input data.");
}

