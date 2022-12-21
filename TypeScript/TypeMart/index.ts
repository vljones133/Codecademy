import products from './products';

const productName: string = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = '575 Broadway, Nashville, Tennessee';

//find product
const product = products.filter((product) => product.name === productName)[0];
console.log(product);

//pre ordered?
if (product.preOrder === 'true') {
  console.log('We will send you a message when your product is on its way.');
}

//set shipping price
if (Number(product.price) >= 25) {
  shipping = 0;
  console.log('We provide free shipping for this product!');
} else {
  shipping = 5;
}

//add taxes
if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

//calculate tax total
taxTotal = Number(product.price) * taxPercent;
//calculate total
total = Number(product.price) + taxTotal + shipping;

console.log(`
RECEIPT:
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
