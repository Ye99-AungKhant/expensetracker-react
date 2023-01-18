import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: 1, title: "Car Insurance", amount: 200, date: new Date(2023, 1, 15) },
    { id: 2, title: "Buy Watch", amount: 15, date: new Date(2023, 1, 17) },
    { id: 3, title: "Present for girlfriend", amount: 150, date: new Date(2023, 1, 18) },
    { id: 4, title: "Shoe", amount: 30, date: new Date(2023, 1, 5) },
  ]

  return (
    <div>
      {expenses.map((exp) => {
        return (
          <ExpenseItem key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        )
      })}
    </div>
  );
}

export default App;
