import React from "react";
import {Route, Switch} from 'react-router-dom';
import ShopPage from "../Pages/ShopPage/ShopPage";
import FavoritePage from "../Pages/FavoritePage/FavoritePage";
import CartPage from "../Pages/CartPage/CartPage";
import styles from './switchComponent.scss'

const SwitchComponent =()=>{
    return(
        <div className='SwitchComponent'>
        <Switch>
            <Route exact path='/'> <ShopPage/> </Route>
            <Route exact path='/favorite'> <FavoritePage/> </Route>
            <Route exact path='/cart'><CartPage/></Route>
        </Switch>
        </div>
    )
}
export default SwitchComponent