import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    { id: 1, title: "Car Insurance", amount: 200, date: new Date(2023, 1, 15) },
    { id: 2, title: "Buy Watch", amount: 15, date: new Date(2023, 1, 17) },
    { id: 3, title: "Present for girlfriend", amount: 150, date: new Date(2023, 1, 18) },
    { id: 4, title: "Shoe", amount: 30, date: new Date(2023, 1, 5) },
  ]

  return (
    <div>
      <NewExpense />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
