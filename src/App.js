import React from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./Components/Header/Header";
import SwitchComponent from "./Components/SwitchComponent";
import {createStore, compose,applyMiddleware} from "redux";
import {rootReducer} from "./store/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";



function App() {
    const store = createStore(rootReducer,compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))




    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <SwitchComponent/>
            </Router>
        </Provider>
    );
}

export default App;
