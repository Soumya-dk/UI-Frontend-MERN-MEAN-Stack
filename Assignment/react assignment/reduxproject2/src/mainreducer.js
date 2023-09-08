import { combineReducers } from "redux";

// The combineReducers use to combine multiple reducers together and produce 1 reducer

import Basiclist from "./basicreducer";
import Contactlist from "./contactreducer";
import Educationlist from "./educationreducer";
import Experlist from "./experreducer";

const Mainreducer=combineReducers({
    Basiclist,Contactlist,Educationlist,Experlist
});
export default Mainreducer;