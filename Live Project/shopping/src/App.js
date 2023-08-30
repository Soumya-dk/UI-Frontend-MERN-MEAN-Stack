import UserModule from "./user/userapp";
import SellerModule from "./seller/sellerapp";

function App() {
  let login=false;
  if(login==true)
    return( <SellerModule/> )
  else
    return( <UserModule/> )
}

export default App;
