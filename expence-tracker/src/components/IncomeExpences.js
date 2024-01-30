import React, { useContext } from 'react'
import { GlobalContext } from '../contex/GlobalState'

export const IncomeExpences = () => {
  const {transactions}=useContext(GlobalContext);
  const amount=transactions.map(transaction=>transaction.amount);
  const income=amount.filter(amount=>amount>0).reduce((acc,amount)=>(acc+=amount),0);
  const expense=amount.filter(amount=>amount<0).reduce((acc,amount)=>(acc+=amount),0)*-1;
  return (
    <div className="inc-exp-container">
        <div >
            <h4>Income</h4>
            <p id="money-plus" className="money plus">₹{income}</p>
        </div>
        <div >
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">₹{expense}</p>
        </div>

    </div>
  )
}
