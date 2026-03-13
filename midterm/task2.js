function getInventoryValuation(inventory) {
  let quantity = 0;
  let techSum = 0;
  let furnSum = 0;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].qty === 0) {
      console.log(`${inventory[i].name} does not have quantity so will be skipped...`)
      continue
    } else {
      quantity = inventory[i].qty;
    }

    if (inventory[i].category === 'Tech') {
      techSum += inventory[i].price * inventory[i].qty
    } else if (inventory[i].category === 'Furniture') {
      furnSum += inventory[i].price * inventory[i].qty
    }
  }

  return {Tech: techSum, Furniture: furnSum}
}

// Test Code
const testInventory = [
  { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
  { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
  { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
  { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];

console.log(getInventoryValuation(testInventory)); 