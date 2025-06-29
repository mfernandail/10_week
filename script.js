const btn_submit = document.querySelector('#btn_submit')
const form = document.querySelector('#expenseForm')

eventListener()

function eventListener() {
  btn_submit.addEventListener('click', addSpent)
}

function addSpent(e) {
  e.preventDefault()

  form.reset()
  console.log('hola')
}
