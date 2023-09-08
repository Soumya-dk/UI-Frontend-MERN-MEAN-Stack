const Educationlist=(state=[], action)=>{
    
    let edudata=Object.assign([], state);
    
    if(action.type==="addedu"){
        edudata.push(action.educations);
    }
    return edudata;
}
export default Educationlist;