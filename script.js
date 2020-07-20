const budget = document.getElementById('monthlyBudget');
const expenses = document.getElementById('expenses');
const list = document.getElementById('list');
const productName = document.getElementById('productName');
const productAmount = document.getElementById('productAmount');
const form = document.getElementById('userInput');
const btn = document.getElementById('submitProduct');


let storedItems = JSON.parse(localStorage.getItem('items')) || [];  

let transactionLog = [
    {productName:'milk', amount: 30, id: 1},
    {productName:'sugar', amount: 15, id: 2},
    {productName:'coffee', amount: 40, id: 3},
    {productName:'bread', amount: 10, id: 4},
    {productName:'tea', amount: 22, id: 5}
]

function totalExpenses() {
    let newTotalExpenses = document.getElementById('totalExpenses');
    let totalAmount = transactionLog.map((element) => Number(element['amount'])).reduce((sum, current) => sum + current, 0).toFixed(2);
    newTotalExpenses.innerHTML = `£${totalAmount}`;
}



function addTransaction(item){
    let product = document.createElement('li');
    product.innerHTML = `${item.productName} - £${item.amount} <button onclick=deleteItem(${item.id})>DELETE</button>`;
    list.appendChild(product);
}

function deleteItem(id) {
    transactionLog = transactionLog.filter((element) => element.id !== id);
    list.innerHTML = '';
    transactionLog.forEach(addTransaction)
    totalExpenses();
}

function newProduct(event) {
    if(productName.value.length != 0 && productAmount.value.length != 0) {
        list.innerHTML = '';
        let obj = {
            productName: productName.value,
            amount: productAmount.value,
            id: randomId()
        };

        transactionLog.push(obj);
        localStorage.setItem('items', JSON.stringify(transactionLog));
        transactionLog.forEach(addTransaction);
    }
    event.preventDefault();
    totalExpenses();
}

function randomId() {
    return Number((new Date().getTime() * Math.random()).toFixed());
}

(function init() {
    btn.addEventListener('click', newProduct);
    budget.innerHTML = `£500.00`;
    transactionLog.forEach(addTransaction)
    totalExpenses();
})()













