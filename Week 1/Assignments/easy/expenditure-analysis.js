/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let expenditure = [];

  for (let t of transactions) {
    const index = expenditure.findIndex((e) => e.category === t.category);
    if (index === -1) {
      expenditure.push({ category: t.category, totalSpent: t.price });
    } else {
      expenditure[index].totalSpent += t.price;
    }
  }

  return expenditure;
}

// const transactions = [
//   {
//     itemName: "Iphone",
//     category: "Apple",
//     price: "450",
//     timestamp: "07-12-2023",
//   },
//   {
//     itemName: "Iphone",
//     category: "Apple",
//     price: "450",
//     timestamp: "07-12-2023",
//   },
//   {
//     itemName: "Pixel",
//     category: "Google",
//     price: "350",
//     timestamp: "07-12-2023",
//   },
//   {
//     itemName: "Pixel",
//     category: "Google",
//     price: "350",
//     timestamp: "07-12-2023",
//   },
// ];

module.exports = calculateTotalSpentByCategory;
