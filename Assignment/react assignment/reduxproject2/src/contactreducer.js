const Contactlist=(state=[], action)=>{
    
    let contactdata=Object.assign([], state);

    if(action.type==="addcontact"){
        contactdata.push(action.contacts);
    }
    return contactdata;
}
export default Contactlist;