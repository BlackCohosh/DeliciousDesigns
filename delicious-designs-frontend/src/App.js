import './App.css';
import {Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListPlantComponent from './components/ListPlantComponent';
import AddPlantComponent from './components/AddPlantComponent';

function App() {
  return (
    <div>
        <HeaderComponent />
         <div className= "container">

          <Routes>
                {/* localhost:3000/plants */}
              <Route exact path = "/" element={<ListPlantComponent/>}/>
              <Route path = "/plants" element={<ListPlantComponent/>}/>
              <Route path = "/add-plant" element={<AddPlantComponent/>}/>
              <Route path = "/edit-plant/:plantId" element={<AddPlantComponent/>}/>
            </Routes>
       </div>
        <FooterComponent />  
    </div>
  );
}

export default App;
