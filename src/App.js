
// https://my-expense-report.herokuapp.com/   -------------->ebsite linki



import React, {useState,useEffect}from 'react';
import NewExpense from './components/NewExpenses/NewExpenses';
import Expenses from "./components/Expenses/Expenses";
// const express=require("express");
// const port=process.env.PORT||3000
let DUMMY_EXPENSE=[];
const App=()=> {
    // let expenses=[

    //     {
    //         id:'e1',
    //         title:'schoole fee',
    //         amount: 250,
    //         date: new Date(2022, 4, 23)
    //     },
    // ];
    const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

    function fecthData(){
        fetch("https://my-expense.herokuapp.com/expenses").then(
            response=>{
                return response.json();
            }
        ).then(
            data=>{
                console.log(data);
                setExpenses(data);
            }
        );
    }

    useEffect(()=>{
        // fetch("https://my-expense.herokuapp.com/expenses").then(
        //     response=>{
        //         return response.json();
        //     }
        // ).then(
        //     data=>{
        //         console.log(data);
        //         setExpenses(data);
        //     }
        // );
        fecthData();
    },[]);

    const addExpenseHandler=(expense)=>{
    //  console.log(expense)
    // const updateExpense=[expense,...expenses];
    // setExpenses(updateExpense);
        fetch("https://my-expense.herokuapp.com/expenses",{
            method:'POST',
            body:JSON.stringify(expense),
            headers:{
                'content-Type':'application/json'
            }
        }).then(
            response=>{
                fecthData();
            }
        );
        // https://my-expense.herokuapp.com/expenses
    };
    return (
        <div>
            <NewExpense  onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
      </div>
    );
}

// App.listen(port,()=>{
//     console.log(`connection is setup ${port}`)
// })
export default App;



// https://my-expense-report.herokuapp.com/   -------------->ebsite link