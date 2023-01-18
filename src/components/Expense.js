import ExpenseItem from "./ExpenseItem"
import './Expense.css'

function Expense(props) {
    return (
        <div className="expenses">
            {props.items.map((item) => {
                return (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                )
            })}
        </div>
    )
}

export default Expense