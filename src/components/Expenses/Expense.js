import ExpenseItem from "./ExpenseItem"
import './Expense.css'
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import React, { useState } from "react"

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expenseContent = <p>Not any expenses.</p>

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((item) => {
            return (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            )
        })
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContent}
        </Card>
    )
}

export default Expense