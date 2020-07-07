const budget = document.getElementById('budget');
const expenses = document.getElementById('expenses');
// lista, product name, product amount
// sa fac un array in care am niste obiecte de tip transaction, ex : {productName:'milk', amount: £30} - cu sume diferite.
// 


let transactionLog = [
    {},
    {},
]


// creez o noua functie care sa parcurca transactionLog (adica sumele din el), aduna sumele si obtine totalul cheltuielilor.
// map sa raman doar cu preturile, apoi reduce sa obtinem suma. Suma o stocam intr-o variabila si updatam total expenses din index html cu noua suma, cu innerHTML 
