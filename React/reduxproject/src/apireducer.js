const Apilist=(state=[], action)=>{
    
    let apidata=Object.assign([], state);
    
    if(action.type==="saveapi"){
        apidata=action.mydata;
    }
    return apidata;
}
export default Apilist;