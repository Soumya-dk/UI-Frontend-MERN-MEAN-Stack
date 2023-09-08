import {HashRouter, Routes, Route, Link} from 'react-router-dom';

import Mybasic from './basic';
import Mycontact from './contact';
import Myeducation from './education';
import Myexper from './experience';
import Myview from './view';


function App() {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-md navbar-dark sticky-top navy p-2">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarCollapse">

                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item ps-5">
                    <Link className="nav-link text-white fs-5 me-5"  to="/"> Basic</Link>
                  </li>
                  <li className="nav-item ps-5">
                    <Link className="nav-link text-white fs-5 me-5"  to="/contact"> Contact</Link>
                  </li>
                  <li className="nav-item ps-5">
                    <Link className="nav-link text-white fs-5 me-5" to="/edu"> Education </Link>
                  </li>
                  <li className="nav-item ps-5">
                    <Link className="nav-link text-white fs-5 me-5" to="/exper"> Experience </Link>
                  </li>
                  <li className="nav-item ps-5">
                    <Link className="nav-link text-white fs-5" to="/view">View All</Link>
                  </li>

                </ul>
              </div>
            </div>
        </nav>          
      <Routes>
          <Route exact path="/" element={ <Mybasic/> } />
          <Route exact path="/contact" element={ <Mycontact/> } />
          <Route exact path="/edu" element={ <Myeducation/> } />
          <Route exact path="/exper" element={ <Myexper/> } />
          <Route exact path="/view" element={ <Myview/> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
