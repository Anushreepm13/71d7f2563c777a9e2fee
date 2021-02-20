import React from "react"

import {Switch, Route} from react-router-dom;
import Home from "../Components/Home"
import RandomAstroid from "../Components/RandomAstroid"

function Routes(){
    return 
    (
        <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/RandomAstroid" exact component = {RandomAstroid} />
        </Switch>
    )
}

export default Routes;