var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//create arry of product
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
//create filterProductByPrice function to filter products by price
function filterProductByPrice(products, priceFilter) {
    return products.filter(function (product) { return product.price > priceFilter; });
}
//create discount function for 10% discount
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//use function
var filterProduct = filterProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
//show result
// console.log(filterProduct);
console.log(discountProducts);
