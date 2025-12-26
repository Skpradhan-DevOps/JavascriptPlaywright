function orderCoffee(callback) {
  setTimeout(() => {
    callback("Coffee is ready!");
  }, 2000);
}

orderCoffee((coffee) => {
  console.log(coffee);
});
