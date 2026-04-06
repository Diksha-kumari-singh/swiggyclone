import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Hoteloption from "./component/hoteloption";
import Restdata from "./component/Restdata.js";
import { BrowserRouter,Route,Routes} from "react-router";
import MenuCard from "./component/MenuCard.js";

import SecondaryHome from "./component/SecondaryHome";
import { store } from "./stored/stores";
import {Provider} from "react-redux"
import Checkout from "./component/Checkout";
function App(){
    return(
       <>
         <Provider store={store}>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
             <Route path="/resturant" element={<Hoteloption></Hoteloption>}></Route>
             <Route path="/city/delhi/:id" element={<Restdata></Restdata>}></Route>
            < Route path="/city/delhi/:id/search" element={<MenuCard></MenuCard>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
         </Routes>
         </BrowserRouter>
         </Provider>
       </> 
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);