import React, { useState } from "react"
import Expense from "./components/Expenses/Expense"

import './App.css'
import NewExpense from "./components/NewExpense/NewExpense"

const DummyExpenses = [
  { id: 1, title: 'Cloth', amount: 11, date: new Date(2023, 1, 15) },
  { id: 2, title: 'Watch', amount: 30, date: new Date(2023, 1, 16) },
  { id: 3, title: 'Present for bae', amount: 100, date: new Date(2023, 1, 17) },
  { id: 4, title: 'Shoe', amount: 51, date: new Date(2023, 1, 19) },
]

const App = () => {

  const [expenses, setExpenses] = useState(DummyExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  )

}
export default App