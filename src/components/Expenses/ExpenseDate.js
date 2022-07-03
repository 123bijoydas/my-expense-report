import React from 'react';
import './ExpenseDate.css';
const ExpenseDate=(props)=>
{
    //     const month=props.date.tolocaleString('en-US',{month: 'long'});
    // const year=props.date.getFullYear();
    // const day=props.date.tolocaleString('en-US',{day: '2-digit'});
   return (
    <div>{props.date.toISOString()}
    {/* <div> */}
    {/* <div>{ month }</div>
    <div>{year}</div>
    <div>{day}</div> */}
</div>
   );
}
export default ExpenseDate;