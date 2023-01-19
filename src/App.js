import { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DummyExpense = [
  { id: 1, title: "Car Insurance", amount: 200, date: new Date(2023, 1, 15) },
  { id: 2, title: "Buy Watch", amount: 15, date: new Date(2023, 1, 17) },
  { id: 3, title: "Present for girlfriend", amount: 150, date: new Date(2023, 1, 18) },
  { id: 4, title: "Shoe", amount: 30, date: new Date(2023, 1, 5) },
]

const App = () => {

  const [expenses, setExpenses] = useState(DummyExpense)

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
  );
}

export default App;
