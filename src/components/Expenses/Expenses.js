import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

// import Card from '../UI/Card';
const Expenses=(props)=>{
  return (
   <div className="expenses">
     {
       props.item.map(
         expense=>(
          <ExpenseItem 
          key={expense.id}
          date={expense.date}
           title={expense.title} 
           amount={expense.amount}/>
         )
         )
     }
        {/* <ExpenseItem 
      date={props.item[0].date}
       tittle={props.item[0].tittle} 
       amount={props.item[0].amount}/>
       <ExpenseItem 
       date={props.item[1].date}
       tittle={props.item[1].tittle} 
       amount={props.item[1].amount}/>
       <ExpenseItem 
        date={props.item[2].date}
        tittle={props.item[2].tittle} 
        amount={props.item[2].amount}/> */}
   </div>
  );
}
export default Expenses;