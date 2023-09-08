import {HashRouter, Routes, Route} from 'react-router-dom';

import Useheader from './userheader';
import Myhome from './home';
import Mycart from './cart';

const Mylogin=()=><h1>Welcome Login</h1>;
const Myregister=()=><h1>Welcome Register</h1>;


const UserModule=()=>{
    return(
        <HashRouter>
            <Useheader/>
            <Routes>
                <Route exact path="/" element={<Myhome/>}/>
                <Route exact path="/cart" element={<Mycart/>}/>
                <Route exact path="/login" element={<Mylogin/>}/>
                <Route exact path="/register" element={<Myregister/>}/>
            </Routes>
        </HashRouter>
    )
}
export default UserModule;