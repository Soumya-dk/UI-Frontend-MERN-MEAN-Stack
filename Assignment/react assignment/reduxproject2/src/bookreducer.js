// action - it hold value that come from react via useDispatch()
// state - defining one global array with empty value

const Booklist=(state=[], action)=>{
    let bookdata=Object.assign([],state); //fetch old value from state if any

    if(action.type==="addbook"){
       bookdata.push(action.bookname); //push new element
    }

    if(action.type==="removebook"){
        bookdata.splice(action.bookindex, 1);
    }
    return bookdata; // return old + new element together
}
export default Booklist;