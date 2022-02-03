// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPlantComponent from './components/ListPlantComponent';
import AddPlantComponent from './components/AddPlantComponent';

function App() {
  return (
    <div >
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
                {/* localhost:3000/plants */}
              <Route exact path = "/" component = {ListPlantComponent}></Route>
              <Route path = "/plants" component = {ListPlantComponent}></Route>
              <Route path = "/add-plant" component = {AddPlantComponent} ></Route>
              <Route path = "/edit-plant/:id" component = {AddPlantComponent}></Route>
            </Switch>
        </div>
        <FooterComponent />
        </Router>    
    </div>
  );
}

export default App;
