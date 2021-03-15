import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, About} from './pages'
const Routes = () =>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
            </Switch>
        </Router>
    )
}
export default Routes;