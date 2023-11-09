import {HashRouter, Routes, Route, Link} from 'react-router-dom';

import Mybook from "./book";
import Myhome from "./home";
import MyMessage from './message';
import Myemp from './emp';
import Myproduct from './product';
import Newproduct from './newproduct';
import Details from './details';
import Mycart from './cart';
import Order from './order';
import Orderlist from './orderlist';
import Mypic from './mypic';

function App() {
  return (
    <HashRouter>
      <section className="bg-light p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2> MERN Stack </h2>
            </div>
            <div className="col-lg-9 text-end">
              <Link className="me-4" to="/"> Home </Link>
              <Link className="me-4" to="/photo"> Image </Link>
              <Link className="me-4" to="/book"> Books </Link>
              <Link className="me-4" to="/message"> File Read </Link>
              <Link className="me-4" to="/emp"> Employee </Link>
              <Link className="me-4" to="/product"> Product </Link>
              <Link className="me-4" to="/cart"> Cart Items </Link>
              <Link className="me-4" to="/orderlist"> Order List</Link>
              <Link className="me-4" onClick={logout}> 
                {localStorage.getItem("adminname")} Logout
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route exact path="/" element={<Myhome />} />
        <Route exact path="/book" element={<Mybook />} />
        <Route exact path="/message" element={<MyMessage />} />
        <Route exact path="/emp" element={<Myemp />} />
        <Route exact path="/product" element={<Myproduct />} />
        <Route exact path="/newproduct" element={<Newproduct />} />
        <Route exact path="/details/:pid" element={<Details />} />
        <Route exact path="/cart" element={<Mycart />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/orderlist" element={<Orderlist />} />
        <Route exact path="/photo" element={<Mypic />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

const logout=()=>{
  localStorage.clear();
  window.location.reload();
}