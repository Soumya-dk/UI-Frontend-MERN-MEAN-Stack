const Experlist=(state=[], action)=>{
    
    let experdata=Object.assign([], state);

    if(action.type==="addexper"){
        experdata.push(action.experience);
    }
    return experdata;
}
export default Experlist;