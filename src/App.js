import React from 'react';
import './App.css'
import Login from './Components/Login/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signup from './Components/Signup/Signup';
import UserHomepage from './Components/UserHomepage/UserHomepage';
import Mainpage from './Components/Mainpage/Mainpage';
import Userpage2 from './Components/UserPage2/Userpage2';
import Vendor from './Components/Vendor/Vendor';
import Business from './Components/Vendor/Vendor';
import FavoritesPage from './Components/Favorites/FavoritePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Mainpage} exact></Route>
          <Route path={'/Login'} component={Login}  ></Route>
          <Route path={'/Signup'} component={Signup} ></Route>
          <Route path={'/UserHomepage'} component={UserHomepage}></Route>
          <Route path={'/Userpage2'} component={Userpage2} ></Route>
          <Route path={'/Vendor'} component={Business}></Route>
          <Route path={'/FavoritesPage'} component={FavoritesPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
