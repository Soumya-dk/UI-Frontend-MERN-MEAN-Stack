import { useState, useEffect } from "react";

const Api1=()=>{
    let [allcity, updateCity]=useState([]);

    const getcity=()=>{
        fetch("http://localhost:1234/citylist")
        .then(response=>response.json())
        .then(cityArray=>{
            updateCity(cityArray);
        })
    }

    useEffect(()=>{
        getcity();
    }, [1]); //true or 1

    let [newcity,pickCity]=useState("");

    const save=()=>{
        let url="http://localhost:1234/citylist";
        let newdata={"name": newcity};
        let postdata={
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(newdata) //array to json
        }
        fetch(url,postdata)
        .then(response=>response.json())
        .then(cityInfo=>{
            alert("New city added with id:" + cityInfo.id);
            getcity(); // call back the api to reload the list after adding new city
            pickCity("");
        })
    }

    const deletecity=(cityid)=>{
        let url="http://localhost:1234/citylist/" + cityid;
        let postdata={method:"DELETE"};
        fetch(url,postdata)
        .then(response=>response.json())
        .then(cityInfo=>{
            alert(cityid + "Deleted Successfully !");
            getcity(); // to reload the list
        })
    }
    
    return(
        <section>
            <h1>Get(), Post(), Delete() api example</h1>
            <p>
                Enter city name : 
                <input type="text" onChange={obj=>pickCity(obj.target.value)} value={newcity}/>
                <button onClick={save}>Save city</button>
            </p>
            {
                allcity.map((city,index)=>{
                    return(
                        <p key={index} className="three">
                            {city.name}<br/>
                            <button onClick={deletecity.bind(this, city.id)}>Delete</button>
                        </p>
                    )
                })
            }
        </section>
    )
}
export default Api1;