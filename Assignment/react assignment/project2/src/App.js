import { HashRouter, Routes, Route, Link} from "react-router-dom";

import Company from "./basicProject2/company";
import City from "./basicProject2/city";
import Employee from "./basicProject2/employee";
import Customer from "./basicProject2/customer";
import Item from "./basicProject2/item";
import Hookcity from "./hooks/hook1";
import Userurl from "./hooks/hook2";
import Commenturl from "./hooks/hook3";
import Albumurl from "./hooks/hook4";
import Todourl from "./hooks/hook5";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/" className="menu">Company</Link>
        <Link to="/city.html" className="menu">City</Link>
        <Link to="/employee.html" className="menu">Employee</Link>
        <Link to="/customer.html" className="menu">Customer</Link>
        <Link to="/item.html" className="menu">Item</Link>
        <Link to="/hook1" className="menu">Hook1</Link>
        <Link to="/hook2" className="menu">Hook2</Link>
        <Link to="/hook3" className="menu">Hook3</Link>
        <Link to="/hook4" className="menu">Hook4</Link>
        <Link to="/hook5" className="menu">Hook5</Link>
      </header>
      <Routes>
        <Route exact path="/" element={ <Company/> }/>
        <Route exact path="/city.html" element={ <City/> }/>
        <Route exact path="/employee.html" element={ <Employee/> }/>
        <Route exact path="/customer.html" element={ <Customer/> }/>
        <Route exact path="/item.html" element={ <Item/> }/>
        <Route exact path="/hook1" element={ <Hookcity/> }/>
        <Route exact path="/hook2" element={ <Userurl/> }/>
        <Route exact path="/hook3" element={ <Commenturl/> }/>
        <Route exact path="/hook4" element={ <Albumurl/> }/>
        <Route exact path="/hook5" element={ <Todourl/> }/>
      </Routes>
    </HashRouter>
  );
  
}


export default App;
