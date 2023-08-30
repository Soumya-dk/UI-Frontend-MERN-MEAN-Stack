import Myhook6 from "./hook6";

const Myhook5=()=>{
    return(
        <section>
            <h1>Component re-use, props example</h1>
            <Myhook6 itemname="Scanner" price="12000" qty="10" star="5" color="green"/>
            <Myhook6 itemname="Printer" price="15000" qty="5" star="4" color="orange"/>
            <Myhook6 itemname="Mouse" price="800" qty="3" star="3" color="yellow"/>
            <Myhook6 itemname="Keyboard" price="1200" qty="6" star="5" color="green"/>
            <Myhook6 itemname="Laptop" price="45000" qty="2" star="2" color="red"/>
        </section>
    )
}
export default Myhook5;

// xyz={itemname="Scanner" Price="12000" qty="10" star="5"}
// {xyz.itemname}