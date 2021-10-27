import { Switch} from "react-router";
import Route from './Route';

import Home from "../pages/home";
import Position from "../pages/position";

export default function routes() {
    
    return (
        <Switch>
            <Route exact path="/" component={Home}  title="Funcionários"/>
            <Route exact path="/position" component={Position}  title="Cargo"/>
        </Switch>
    );

}