import {useState, useEffect} from 'react';

const MyMessage = () =>{
    let [allmessage, updateMessage] = useState( [] );
    const getMessage = () =>{
        fetch("http://localhost:2222/messagelist")
        .then(response =>response.text())
        .then(messageData=>{
            if(messageData.length>0)
            {
                let msgArray = messageData.split("#"); // string to array
                msgArray.pop();
                updateMessage( msgArray );
            }else{
                updateMessage( [] );
            }
        })
    }

    useEffect(()=>{
        getMessage();
    },[1]);

    let[newmsg, pickMessage] = useState("");

    const save = () =>{
        let url = "http://localhost:2222/newmessage";
        let messageData = {"message":newmsg};

        let postData = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body: JSON.stringify( messageData )
        }
        fetch(url, postData)
        .then(response=>response.text())
        .then(serverRes=>{
            alert( serverRes );
            getMessage(); // to reload the message list 
        })
    }

    const delmsg = () =>{
        let url = "http://localhost:2222/clearall";
        fetch(url)
        .then(response=>response.text())
        .then(msg=>{
            alert(msg);
            getMessage();
        })
    }

    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-3'>
                    <h3> New Message </h3>
                    <textarea className='form-control' 
                    onChange={obj=>pickMessage(obj.target.value)}></textarea>
                    <button className='btn btn-primary m-4' onClick={save}> Send Message </button>
                </div>

                <div className='col-lg-9'>
                    <h3> Message List : {allmessage.length}</h3>
                    <button className='btn btn-danger m-3' onClick={delmsg}> Delete All Messages </button>
                    {
                        allmessage.map((msg, index)=>{
                            return(
                                <p key={index}> {msg} </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default MyMessage;