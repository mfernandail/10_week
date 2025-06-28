class Expense {
  constructor(description, amount, category, date = new Date()) {
    this.description = description
    this.amount = parseFloat(amount)
    this.category = category
    this.date = date.toLocaleDateString()
  }
}
