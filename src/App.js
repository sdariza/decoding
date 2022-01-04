import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/getTrama">
            <Main />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
