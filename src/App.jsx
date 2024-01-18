import './App.css'
import {Route, Routes} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound.jsx";
import Counter from "./pages/Counter.jsx";

const App = () => {


    return (
        <div>
            <Routes>
                <Route path='/' element={<Counter />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
}

export default App
