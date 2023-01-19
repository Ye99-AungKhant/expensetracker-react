import ExpenseItem from "./ExpenseItem"
import './Expense.css'
import Card from "../UI/Card"

const Expense = (props) => {
    return (
        <Card className="expenses">
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
        </Card>
    )
}

export default Expense