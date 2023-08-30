import {HashRouter, Routes, Route, Link} from 'react-router-dom';

import Mydashboard from './dashboard';
import Mybook from './book';
import Myuser from './user';
import Myapi from './api';


function App() {
  return (
    <HashRouter>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-5 text-center text-danger">
              <h1><i className="fa fa-desktop"></i> React And Redux </h1>
          </div>
          <div className="col-lg-7 text-end pt-3">
              <Link className="btn btn-primary me-3" to="/"> <i className="fa fa-home"></i> Dashboard </Link>
              <Link className="btn btn-danger me-3"  to="/book"> <i className="fa fa-book"></i>  Manage Books </Link>
              <Link className="btn btn-success me-3" to="/user"> <i className="fa fa-users"></i> Manage Users </Link>
              <Link className="btn btn-warning me-3" to="/api"> <i className="fa fa-globe"></i> Manage API </Link>
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
