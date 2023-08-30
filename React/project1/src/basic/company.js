const Mycompany=()=>{
    let allcompany=[
        {name:"TCS",product:200,branch:300,employee:200000},
        {name:"Wipro",product:100,branch:200,employee:400000},
        {name:"Infosys",product:400,branch:100,employee:700000},
        {name:"Amazon",product:300,branch:500,employee:300000},
        {name:"Cisco",product:500,branch:600,employee:500000}
    ];
    return(
        <section>
            <h1>Company list in india : {allcompany.length}</h1>
            <table cellpadding="12" border="1" cellspacing="0" width="60%">
                <thead>
                    <tr align='left'>
                        <th>Sl No.</th>
                        <th>Company Name</th>
                        <th>Products</th>
                        <th>Branches</th>
                        <th>Total Employee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allcompany.map((company,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{company.name}</td>
                                    <td>{company.product}</td>
                                    <td>{company.branch}</td>
                                    <td>{company.employee}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Mycompany;