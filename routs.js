import { Switch, Route } from "react-router-dom";
import Home from './src/pages/home'
import Produto from './src/pages/produto/Produto'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/produto/:id" component={Produto}/>
        </Switch>
    )
}