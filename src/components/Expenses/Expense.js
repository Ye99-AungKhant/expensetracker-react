import ExpenseItem from "./ExpenseItem"
import './Expense.css'
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"
import React, { useState } from "react"
import ExpenseList from "./ExpenseList"

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })



    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </li>
    )
}

export default Expense