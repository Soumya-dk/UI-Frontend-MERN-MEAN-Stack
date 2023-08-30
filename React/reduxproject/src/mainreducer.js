import { combineReducers } from "redux";

// The combineReducers use to combine multiple reducers together and produce 1 reducer

import Booklist from "./bookreducer";
import Userlist from "./userreducer";
import Apilist from "./apireducer";

const Mainreducer=combineReducers({
    Booklist, Userlist, Apilist
});
export default Mainreducer;