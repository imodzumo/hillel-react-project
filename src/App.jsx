import './App.css'
import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import Loading from "./components/Loading.jsx";

const HeaderLazy = lazy(() => import('./components/Header.jsx'));
const LoginLazy = lazy(() => import('./pages/Login.jsx'));
const MenuLazy = lazy(() => import('./pages/Menu.jsx'));
const CartLazy = lazy(() => import('./pages/Cart.jsx'));
const NewOrderLazy = lazy(() => import('./pages/NewOrder.jsx'));
const OrderDetailsLazy = lazy(() => import('./pages/OrderDetails.jsx'));
const PageNotFoundLazy = lazy(() => import('./pages/PageNotFound.jsx'));

const App = () => {

    return (
        <div>
            <HeaderLazy />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<LoginLazy />}></Route>
                    <Route path='/menu' element={<MenuLazy />}></Route>
                    <Route path='/cart' element={<CartLazy />}></Route>
                    <Route path='/order/new' element={<NewOrderLazy />}></Route>
                    <Route path='/order/:orderId' element={<OrderDetailsLazy />}></Route>
                    <Route path='*' element={<PageNotFoundLazy />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App
