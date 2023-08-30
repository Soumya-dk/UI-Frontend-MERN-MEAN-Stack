const Mycustomer=()=>{
    let allcustomer=[
        {city:"Bangalore",user:['User 1','User 2','User 3']},
        {city:"Mumbai",user:['User 4','User 11']},
        {city:"Pune",user:['User 30','User 27','User 34']},
        {city:"Delhi",user:['User 17','User 55','User 66','User 19']},
        {city:"Chennai",user:['User 92']},
        {city:"Kolkata",user:['User 74','User 82']}
    ];
    return(
        <section>
            <h1>Nested array of object</h1>
            {
                allcustomer.map((onerecord,index)=>{
                    return (
                        <fieldset key={index}>
                            <legend>{onerecord.city} - {onerecord.user.length}</legend>
                            {
                                onerecord.user.map((fullname,index2)=>{
                                    return(
                                        <p key={index2}>{fullname}</p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </section>
    )
}
export default Mycustomer;