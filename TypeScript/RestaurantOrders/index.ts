import { restaurants, Restaurant } from './restaurants';
import { orders, Order, PriceBracket } from './orders';

function getMaxPrice(price: PriceBracket): number {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
}

function getOrders(price: PriceBracket, orders: Order[][]) {
  let filteredOrders: Order[][] = [];
  orders.forEach((restaurant) => {
    const filteredForRestaurant = restaurant.filter(
      (order) => order.price <= getMaxPrice(price)
    );
    filteredOrders.push(filteredForRestaurant);
  });
  return filteredOrders;
}

function printOrders(restaurants: Restaurant[], orders: Order[][]) {
  restaurants.forEach((restaurant, index) => {
    if (orders[index].length !== 0) {
      console.log(`${restaurant.name}`);
      orders[index].forEach((order) => {
        console.log(`- ${order.name}: $${order.price}`);
      });
    }
  });
}

const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);
