import { useState } from "react";
import swal from "sweetalert";

const Hookcity=()=>{
    let[citylist,updateCity]=useState([]);
    let[newcity,pickCity]=useState("");

    const save=()=>{
        updateCity(citylist=>[...citylist,newcity]);
        swal(newcity,"Added Successfully !","success");
        pickCity("");
    }
    const delitem=(index,name)=>{
        citylist.splice(index,1); //a-b, a=a-b // delete 1 element from array
        updateCity(citylist=>[...citylist]); //a=a //update remaining element in state
        swal(name,"Deleted Successfully !","success");
    }
    return (
        <section>
            <div id="citylist">
                <div className="div1">
                    <div className="div3">
                        <h4>Enter City Name</h4>
                        <input 
                            type="text" 
                            onChange={obj=>pickCity(obj.target.value)}
                            value={newcity}
                        />
                        <p><button onClick={save}>Save</button></p>
                    </div>
                </div>

                <div className="div2">
                    <h3>Available City - {citylist.length} </h3>
                    <div id="cities">
                        {
                            citylist.map((cityname,index)=>{
                                return(
                                    <div key={index}>
                                        <h4>{cityname}</h4>
                                        <h4>{cityname.length}</h4>
                                        <button onClick={delitem.bind(this,index,cityname)}>Remove</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hookcity;