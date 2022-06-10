/*Update the code to calculate your average monthly grocery expenses for the five months' worth of expenses that have been recorded already in the array.

Run Your Code
In your terminal, run your code with the following command.

node main.js
When you run the code, it should display the following.

On average, I spend 191.4 dollars on groceries per month.
So far this year, I have spent 957 dollars on groceries. */

const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const cost of monthlyExpenses) {
	totalExpense += cost
    // Add the current monthly cost to the value of totalExpense
}

// Calculate your average monthly food costs
const averageExpense = totalExpense/monthlyExpenses.length

// Make sure you use backticks for multi-line string output
console.log(`On average, I spend ${averageExpense} dollars on groceries per month. So far this year, I have spent ${totalExpense} dollars on groceries`)
