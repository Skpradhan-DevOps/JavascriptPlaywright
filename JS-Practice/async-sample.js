orderCoffee()
  .then(coffee => {
    console.log(coffee);
    return orderSandwich();
  })
  .then(sandwich => {
    console.log(sandwich);
    return orderDonut();
  })
  .then(donut => {
    console.log(donut);
    return getBill();
  })
  .then(bill => {
    console.log(bill);
  });

async function serveCustomer() {
  try {
    const coffee = await orderCoffee();
    console.log(coffee);

    const sandwich = await orderSandwich();
    console.log(sandwich);

    const donut = await orderDonut();
    console.log(donut);

    const bill = await getBill();
    console.log(bill);
  } catch (error) {
    console.error("Error serving customer:", error);
  }
}

serveCustomer();