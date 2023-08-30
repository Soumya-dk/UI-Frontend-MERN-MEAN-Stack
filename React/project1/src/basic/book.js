const Mybook=()=>{
    let books=['HTML','CSS','PHP','Python','Java','Node'];
    return(
        <section>
            <h1>Manage Books : {books.length}</h1>
            {
                books.map((bookname,index)=>{
                    return(
                        <p key={index} className="three">{bookname}</p>
                    )
                })
            }
        </section>
    )
}
export default Mybook;