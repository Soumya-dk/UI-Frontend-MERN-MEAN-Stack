const City=()=>{
    let cities=["Bangalore","Pune","Chennai","Mumbai","Delhi","Kolkata","Hyderabad","Jaipur","Surat","Lucknow"];
    return(
        <section>
            <h1>City List</h1>
            {
                cities.map((cityname,index)=>{
                    return(
                        <p key={index}>{index+1} - {cityname}</p>
                    )
                })
            }
        </section>
    )
}
export default City;