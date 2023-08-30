const Myhook6=(product)=>{

    const printstar=(total)=>{
        let data="";
        for(let i=1; i<=total; i++){
            data=data+ "*";
        }
        return data;
    }
    return(
        <div className="four">
            <h3 className={product.color}> {product.itemname} </h3>
            <p>Rs.{product.price}</p>
            <p>{product.qty} in stock</p>
            <p className={product.color}>
                {printstar(product.star)} 
                star rated
            </p>
        </div>
    )
}
export default Myhook6;