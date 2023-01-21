import React, { useState } from "react";
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}

            {isEditing && (
                <NewExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditingHandler} />
            )}
        </div>
    )
}

export default NewExpense