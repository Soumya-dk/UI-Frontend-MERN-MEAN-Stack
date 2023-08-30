const Company=()=>{
    let companies=["Wipro","TCS","Dell","Mphasys","Capgemini","Apple","Amazon","Microsoft","Accenture","Canon"];
    return(
        <section>
            <h1>Company List</h1>
            {
                companies.map((compname,index)=>{
                    return(
                        <p key={index}>{index+1} - {compname}</p>
                    )
                })
            }
        </section>
    )
}
export default Company;