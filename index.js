// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'klif';

function upperCaseCustomerName() {
    customerName = customerName.toLocaleUpperCase();
}

function setBestCustomer() {
    var bestCustomer = `'not bob'`;
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}