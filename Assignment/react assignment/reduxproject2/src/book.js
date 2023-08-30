import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Mybook=()=>{
    const booklist=useSelector(state=>state.Booklist);
    
    let [newbook,pickbook]=useState("");

    const dispatch=useDispatch();
    
    const savebook=()=>{
        let bookinfo={"bookname":newbook, "type":"addbook"};
        //  bookinfo={"bookname":"java","type":"addbook"}
        dispatch(bookinfo); //sending to store, dispatching the action to store
        swal(newbook,"Sent to store !","success");
        pickbook("");
    }

    const delbook=(index, bookname)=>{
        let bookinfo={"bookindex":index, "type":"removebook"};
        dispatch(bookinfo);
        swal(bookname,"Deleted Successfully !","warning");
    }
    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center mb-4">
                    <h1 className="text-primary">Manage Books : {booklist.length}</h1>
                    <p>
                        Enter Book name : 
                        <input type="text" className="m-2" onChange={obj=>pickbook(obj.target.value)} value={newbook}/>
                        <button className="btn btn-success m-2" onClick={savebook}>Save book</button>
                    </p>
                </div>
                {
                    booklist.map((bookname,index)=>{
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
                                <div className="shadow-lg rounded p-3 text-center">
                                    <p className="text-primary">{bookname}</p>
                                    <button className="btn btn-danger btn-sm m-2" 
                                    onClick={delbook.bind(this, index, bookname)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Mybook;