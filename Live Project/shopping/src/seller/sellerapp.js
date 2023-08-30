import {HashRouter, Routes, Route} from 'react-router-dom';

const Sellerheader=()=><h1>Seller Header</h1>;
const Mydashboard=()=><h1>Dashboard</h1>;
const Myorder=()=><h1>Order List</h1>;
const Newproduct=()=><h1>Add New Product</h1>;
const ProductList=()=><h1>Product List</h1>;

const SellerModule=()=>{
    return(
        <HashRouter>
            <Sellerheader/>
            <Routes>
                <Route exact path="/" element={<Mydashboard/>} />
                <Route exact path="/order" element={<Myorder/>} />
                <Route exact path="/newproduct" element={<Newproduct/>} />
                <Route exact path="/productlist" element={<ProductList/>} />
            </Routes>
        </HashRouter>
    )
}
export default SellerModule;