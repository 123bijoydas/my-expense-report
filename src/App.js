import React, {useState,useEffect}from 'react';
import NewExpense from './components/NewExpenses/NewExpenses';
import Expenses from "./components/Expenses/Expenses";
let DUMMY_EXPENSE=[

        // {
        //     id:'e1',
        //     title:'schoole fee',
        //     amount: 250,
        //     date: new Date(2022, 4, 23)
        // },
        // {
        //     id:'e2',
        //     title:'books',
        //     amount: 200,
        //     date: new Date(2022, 3, 23)
        // },
        // {
        //     id:'e3',
        //     title:'house rent',
        //     amount: 350,
        //     date: new Date(2022, 6, 23)
        // }
];
const App=()=> {
    // let expenses=[

    //     {
    //         id:'e1',
    //         title:'schoole fee',
    //         amount: 250,
    //         date: new Date(2022, 4, 23)
    //     },
    //     {
    //         id:'e2',
    //         title:'books',
    //         amount: 200,
    //         date: new Date(2022, 3, 23)
    //     },
    //     {
    //         id:'e3',
    //         title:'house rent',
    //         amount: 350,
    //         date: new Date(2022, 6, 23)
    //     }
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
export default App;