import { BrowserRouter, Route, Switch } from 'react-router-dom'
import style from './App.module.scss'
import { Navigation } from './Components/Navigation/Navigation'
import { routesConfig } from '@routes/routesConfig'

const App = () => {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Navigation />
        <Switch>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
