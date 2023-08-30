const Myproduct=()=>{
    let allproduct=['Apple','Mango','Milk','Rice','Orange'];
    return(
        <section>
            <h1>Product list : {allproduct.length}</h1>
            <p>{allproduct[0]}</p>
            <p>{allproduct[1]}</p>
            <p>{allproduct[2]}</p>
            <h2>Read array elements using map()</h2>
            {
                allproduct.map((itemname,position)=>{
                    return(
                        <p key={position}> {itemname} - {position} </p>
                    )
                })
            }
        </section>
    )
}
export default Myproduct;