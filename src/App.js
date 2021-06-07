import {
  routes
} from "./routes";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import * as _ from 'lodash'

const App = () => {
  
  return (
    _.map(routes, (route, index) => {
      return (
        <Router key={index}>
          <Switch>
            <Route 
              path={route.path}
              exact={route.exact}
              component={route.components}
            />
          </Switch>
        </Router>
      )
    })
  )
}

export default App;
