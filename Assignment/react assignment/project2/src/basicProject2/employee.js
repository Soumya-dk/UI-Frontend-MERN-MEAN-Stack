const Employee=()=>{
    let employee=[
        {name:"Ramesh",mobile:9888777222,email:"abc@gmail.com",location:"Bangalore"},
        {name:"Mahesh",mobile:9292929022,email:"def@gmail.com",location:"Pune"},
        {name:"Rahul",mobile:9654379111,email:"ghi@gmail.com",location:"Chennai"},
        {name:"Sunil",mobile:8238877220,email:"jkl@gmail.com",location:"Mumbai"},
        {name:"Ram",mobile:8888277276,email:"mon@gmail.com",location:"Delhi"}
    ];
    return(
        <section>
            <h1>Employee List</h1>
            <table cellpadding="12" border="1" cellspacing="0" width="60%">
                <thead>
                    <tr align='left'>
                        <th>Sl No.</th>
                        <th>Employee Name</th>
                        <th>Mobile No.</th>
                        <th>E-mail Id</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((emp,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.location}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Employee;