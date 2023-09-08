import {HashRouter, Routes, Route, Link} from 'react-router-dom';

import Mybook from "./book";
import Myhome from "./home";

function App() {
  return (
    <HashRouter>
      <section className="bg-light p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2>MERN Stack</h2>
            </div>
            <div className="col-lg-9 text-end">
              <Link className="me-4" to="/">Home</Link>
              <Link className="me-4" to="/book">Books</Link>
              <Link className="me-4">File Read</Link>
              <Link className="me-4">File Write</Link>
              <Link className="me-4">Nested Array</Link>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route exact path="/" element={ <Myhome/>} />
        <Route exact path="/book" element={ <Mybook/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
