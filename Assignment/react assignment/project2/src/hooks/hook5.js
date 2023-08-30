import { useState, useEffect } from "react";

const Todourl=()=>{
    let [todolist, updatetodo]=useState([]);
    
    const gettodo=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(todoArray=>{
            updatetodo(todoArray);
        })
    }

    useEffect(()=>{
        gettodo();
    })

    return(
        <section>
            <h4>Total Todos : {todolist.length}</h4>
            <table  border="1" cellspacing="0" width="50%">
                <thead>
                    <tr align='left'>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todolist.map((todo, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{todo.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Todourl;