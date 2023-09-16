import {HashRouter, Routes, Route} from 'react-router-dom';

import Useheader from './userheader';
import Myhome from './home';
import Mycart from './cart';
import Myregsiter from './register';
import Mylogin from './login';

const UserModule=()=>{
    return(
        <HashRouter>
            <Useheader/>
            <Routes>
                <Route exact path="/" element={<Myhome/>}/>
                <Route exact path="/cart" element={<Mycart/>}/>
                <Route exact path="/login" element={<Mylogin/>}/>
                <Route exact path="/register" element={<Myregsiter/>}/>
            </Routes>
        </HashRouter>
    )
}
export default UserModule;