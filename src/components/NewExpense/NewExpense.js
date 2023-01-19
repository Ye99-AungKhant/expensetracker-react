import React from "react";
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
        </div>
    )
}

export default NewExpense