const path = require("path");

const dataDirectory = path.join(__dirname, "seedData");

const orderedFileNames = [
  "products.json",
  "expenseSummary.json",
  "sales.json",
  "salesSummary.json",
  "purchases.json",
  "purchaseSummary.json",
  "users.json",
  "expenses.json",
  "expenseByCategory.json",
];

const modelNames = orderedFileNames.map((fileName) => {
  const modelName = path.basename(fileName, path.extname(fileName));
  return modelName.charAt(0).toUpperCase() + modelName.slice(1);
});

console.log(modelNames);
