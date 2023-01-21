import React, { useState } from "react";
import Card from "../UI/Card";
import './Expense.css'
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expense={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expense