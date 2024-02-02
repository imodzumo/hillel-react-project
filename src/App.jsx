import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Header from "./components/Header.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";
import NewOrder from "./pages/NewOrder.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";

const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/menu' element={<Menu />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/order/new' element={<NewOrder />}></Route>
                <Route path='/order/:orderId' element={<OrderDetails />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
}

export default App
