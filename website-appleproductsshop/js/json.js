//To execute  => node .\js\json.js
/*
const FileSystem = require('fs');

let data = FileSystem.readFileSync('./data/products.json');
//console.log(data);

let products = JSON.parse(data).products;
console.log(products);
*/
console.log("\n\n\n");

const FileSystem = require('fs');

let data = {
    "products2": [
        {
        "name": "Iphone X",
        "color": "Black",
        "price": 300
        }, 
        {
        "name": "Iphone XR",
        "color": "Red",
        "price": 400
        }, 
        {
        "name": "Iphone 13",
        "color": "Grey",
        "price": 800
        }
    ]
};

let jsonData = JSON.stringify(data);
console.log(jsonData);

FileSystem.writeFile('./data/products2.json',jsonData,(error) => {
    if(error){
        console.log('Error: ${error}');
    }
    else{
        console.log('Archivo JSON generado correctamente');
    }
});