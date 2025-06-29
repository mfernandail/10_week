class Expense {
  constructor(description, amount, category) {
    this.id = Date.now()
    this.description = description
    this.amount = parseFloat(amount)
    this.category = category
  }
}

const form = document.getElementById('expenseForm')

const descriptionInput = document.getElementById('description')
const amountInput = document.getElementById('amount')
const categoryInput = document.getElementById('category')

const totalDisplay = document.querySelector('.resume p')
const clearBtn = document.querySelector('.btn_clear')
const main = document.querySelector('main')

let expenses = JSON.parse(localStorage.getItem('expenses')) || []

renderExpenses()

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const description = descriptionInput.value.trim()
  const amount = amountInput.value
  const category = categoryInput.value

  if (!description || !amount || !category || amount < 0) return

  const newExpense = new Expense(description, amount, category)
  expenses.push(newExpense)

  saveExpenses()
  renderExpenses()

  form.reset()
})

function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenses))
}

function renderExpenses() {
  const oldList = document.querySelector('.expense-list')
  if (oldList) oldList.remove()

  const list = document.createElement('ul')
  list.classList.add('expense-list')

  const totalExpenses = document.createElement('p')
  totalExpenses.innerHTML = `N° ${expenses.length}`

  let total = 0

  expenses.forEach((expense) => {
    const item = document.createElement('li')
    item.classList.add('expense-item')
    item.innerHTML = `
      <strong>${expense.description}</strong> - $${expense.amount.toFixed(2)} 
      <em>(${expense.category})</em>
    `
    list.appendChild(item)
    total += expense.amount
  })

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`
  totalDisplay.appendChild(totalExpenses)
  main.appendChild(list)
}

clearBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to delete all the data?')) {
    expenses = []
    saveExpenses()
    renderExpenses()
  }
})
