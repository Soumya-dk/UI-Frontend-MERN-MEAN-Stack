const Item=()=>{
    let item=[
        {name:"Apple",price:140,qty:3},
        {name:"Banana",price:190,qty:5},
        {name:"Tea",price:200,qty:4},
        {name:"Coffee",price:170,qty:9},
        {name:"Milk",price:100,qty:5}
    ];
    return(
        <section>
            <h1>Item List</h1>
            <table cellpadding="12" border="1" cellspacing="0" width="60%">
                <thead>
                    <tr align='left'>
                        <th>Sl No.</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map((itemname,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{itemname.name}</td>
                                    <td>{itemname.price}</td>
                                    <td>{itemname.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}
export default Item;