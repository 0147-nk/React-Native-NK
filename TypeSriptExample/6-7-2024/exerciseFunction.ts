type Product = {
    name: string;
    price: number;
    category: string;
}

//create arry of product
let products : Product[] = [
    {name: "Laptop", price: 50000, category: "Electronics"},
    {name: "Shirt", price: 1200, category: "Apparel"},
    {name: "Coffee Maker", price: 2500, category: "Appliances"},
]

//create filterProductByPrice function to filter products by price
function filterProductByPrice(products : Product[], priceFilter : number) : Product[] {
    return products.filter(product => product.price > priceFilter);
}

//create discount function for 10% discount
function discountProduct(products : Product[]) : Product[] {
    return products.map(product => ({...product, price : product.price * 0.9}));
}

//use function
let filterProduct = filterProductByPrice(products, 2000);
let discountProducts = discountProduct(filterProduct);

//show result
// console.log(filterProduct);
console.log(discountProducts);