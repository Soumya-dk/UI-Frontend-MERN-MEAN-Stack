const Basiclist=(state=[], action)=>{
    
    let basicdata=Object.assign([], state);

    if(action.type==="addbasic"){
        basicdata.push(action.basics);
    }
    return basicdata;
}
export default Basiclist;