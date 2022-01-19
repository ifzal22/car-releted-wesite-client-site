import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="">
    <BrowserRouter>
<Header></Header>

<Switch>
  <Route path="/">
    <Home></Home>
  </Route>
  <Route path="/home">
    <Home></Home>
  </Route>
</Switch>




    </BrowserRouter>
    </div>
  );
}

export default App;
