const budget = document.getElementById('monthlyBudget');
const expenses = document.getElementById('expenses');
const list = document.getElementById('list');
const productName = document.getElementById('productName');
const productAmount = document.getElementById('productAmount');
const form = document.getElementById('userInput');
// lista, product name, product amount DONE

// sa fac un array in care am niste obiecte de tip transaction, ex : {productName:'milk', amount: £30} - cu sume diferite.
// DONE


let transactionLog = [
    {productName:'milk', amount: 30},
    {productName:'sugar', amount: 15},
    {productName:'coffee', amount: 40},
    {productName:'bread', amount: 10},
    {productName:'tea', amount: 22}
]

function totalExpenses() {
    let newTotalExpenses = document.getElementById('totalExpenses');
    let totalAmount = transactionLog.map((element) => element['amount']).reduce((sum, current) => sum + current, 0).toFixed(2);
    newTotalExpenses.innerHTML = `£${totalAmount}`;
}



function addTransaction(item){
    let product = document.createElement('li');
    product.innerHTML = `${item.productName} - £${item.amount}`;
    list.appendChild(product);
}



function cds() {
    alert('hello');
}



(function init() {
    form.addEventListener('submit', cds)
    budget.innerHTML = `£500.00`;
    transactionLog.forEach(addTransaction)
    totalExpenses();
})()
// alt mod de a apela o functie IIFE (immediately invoked function expression)













