import React from "react";
import { Routes, Route } from "react-router-dom"
import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";


export const Content = () => {
    return(
        <div>
        <Routes>
            <Route exact path='/cart' element={ <Cart/>} />
            <Route exact path='/store' element={ <Store/> } />
            <Route exact path='/' element={ <Login />}/>
        </Routes>
        </div>
    )
}