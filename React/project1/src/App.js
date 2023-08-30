import { HashRouter, Routes, Route, Link} from "react-router-dom";

import Myhome from "./basic/home";
import Myproduct from "./basic/product";
import Mybook from "./basic/book";
import Mycompany from "./basic/company";
import Mycustomer from "./basic/customer";
import Myhook1 from "./hooks/hook1";
import Myhook2 from "./hooks/hook2";
import Myhook3 from "./hooks/hook3";
import Myhook4 from "./hooks/hook4";
import Myhook5 from "./hooks/hook5";
import Myhook7 from "./hooks/hook7";
import Myhook8 from "./hooks/hook8";
import Myhook9 from "./hooks/hook9";
import Api1 from "./api/mycity";
import Api2 from "./api/mycustomer";
import Editcustomer from "./api/editcustomer";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/" className="menu">Home</Link>
        <Link to="/product.html" className="menu">My Product</Link>
        <Link to="/book.php" className="menu">Book list</Link>
        <Link to="/company.jsp" className="menu">Company</Link>
        <Link to="/customer.py" className="menu">My customer</Link>
        <Link to="/hook1" className="menu">Hook1</Link>
        <Link to="/hook2" className="menu">Hook2</Link>
        <Link to="/hook3" className="menu">Hook3</Link>
        <Link to="/hook4" className="menu">Hook4</Link>
        <Link to="/hook5" className="menu">Hook5</Link>
        <Link to="/hook7/Bangalore/MCA/2019" className="menu">Hook7</Link>
        <Link to="/hook8" className="menu">Hook8</Link>
        <Link to="/hook9" className="menu">Hook9</Link>
        <Link to="/api1" className="menu">City Api</Link>
        <Link to="/api2" className="menu">Customer Api</Link>
        Welcome - { localStorage.getItem("fullname") } 
        <button onClick={logout}> Logout </button>
      </header>
      <Routes>
        <Route exact path="/" element={ <Myhome/> }/>
        <Route exact path="/product.html" element={ <Myproduct/> }/>
        <Route exact path="/book.php" element={ <Mybook/> }/>
        <Route exact path="/company.jsp" element={ <Mycompany/> }/>
        <Route exact path="/customer.py" element={ <Mycustomer/> }/>
        <Route exact path="/hook1" element={ <Myhook1/> }/>
        <Route exact path="/hook2" element={ <Myhook2/> }/>
        <Route exact path="/hook3" element={ <Myhook3/> }/>
        <Route exact path="/hook4" element={ <Myhook4/> }/>
        <Route exact path="/hook5" element={ <Myhook5/> }/>
        <Route exact path="/hook7/:city/:edu/:year" element={ <Myhook7/> }/>
        <Route exact path="/hook8" element={ <Myhook8/> }/>
        <Route exact path="/hook9" element={ <Myhook9/> }/>
        <Route exact path="/api1" element={ <Api1/> }/>
        <Route exact path="/api2" element={ <Api2/> }/>
        <Route exact path="/editcust/:customerid" element={ <Editcustomer/> }/>
      </Routes>
    </HashRouter>
  );
}

export default App;

const logout = () => {
  localStorage.clear(); // clear all data in localStorage
  window.location.reload(); // to reload the current page
}