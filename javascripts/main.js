"use strict";


// UI Interface w/dropdown
// Grab the selected value


// Make XHR Request for data

//Format the data 

//display the data to the user

console.log("Acme Explosives");
const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');


factory.getCategories()
.then( (categories) => {
    console.log(categories);
    return factory.getTypes();
})
.then( (types) => {
    console.log(types);
    return factory.getProducts();
})
.then( (products) => {
    console.log (products);
})
.catch( (err) => {
    console.log(`There was a problem: ${err}`);
});

let promArr = [
    factory.getCategories(), 
    factory.getTypes(), 
    factory.getProducts()
];
Promise.all(promArr)
.then( (dataArr) => {
    formatter.formatData(dataArr); 
    console.log("All the Things", dataArr);
})
.catch( (err) => {
    console.log (err);
});