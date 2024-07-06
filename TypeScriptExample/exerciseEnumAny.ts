enum ProductStatus {
    Available = 'Available',
    OutOfStock = 'Out of Stock',
    Discontinued = 'Discontinued'
}

let products: any[] = [

    {name: "Laptop", status: ProductStatus.Available, price: 1200},
    {name: "Smartphone", status: ProductStatus.OutOfStock, price: 700},
    {name: "Tablet", status: ProductStatus.Discontinued, price: 300}

];

function displayProduct(products: any[]) {
    products.forEach(products => {
        console.log(`Product: ${products.name}, Status: ${products.status}, Price: ${products.price}`)
    });
  }

  displayProduct(products);
