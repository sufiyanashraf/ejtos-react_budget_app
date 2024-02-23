import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, currency} = useContext(AppContext);
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total,item) =>{
        return (total += item.cost);
    },0)
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value>20000){
            alert("The value cannot exceed $20000");
            setNewBudget(newBudget);
            return;
        }
        if(event.target.value<=totalExpenses){
            alert("The Budget Can not be Lower Than The Spent Amount");
            setNewBudget(newBudget);
            return;
        }
        setNewBudget(event.target.value);
    }
    return(
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
