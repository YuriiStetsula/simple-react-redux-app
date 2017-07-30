import React from "react";
import {render} from "react-dom"
import {BrowserRouter, Route} from "react-router-dom"
import './index.css'
import User from "./User"
import {Provider} from "react-redux"
import store from "./store"

const App = () => {
    return(
     <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={User}></Route>
      </BrowserRouter>
     </Provider>
    )
}

render(<App/>, document.getElementById("app"))