import {HashRouter, Routes, Route, Link} from 'react-router-dom';

import Mydashboard from './view';
import Mybook from './book';
import Myuser from './user';
import Myapi from './api';


function App() {
  return (
    <HashRouter>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8 text-center pt-3">
              <Link className="me-3" to="/">Dashboard </Link>
              <Link className="me-3"  to="/book"> Manage Books </Link>
              <Link className="me-3" to="/user">  Manage Users </Link>
              <Link className="me-3" to="/api"> Manage API </Link>
          </div>
        </div>
      </div>

      <Routes>
          <Route exact path="/" element={ <Mydashboard/> } />
          <Route exact path="/book" element={ <Mybook/> } />
          <Route exact path="/user" element={ <Myuser/> } />
          <Route exact path="/api" element={ <Myapi/> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
