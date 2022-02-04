import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PlantService from '../services/PlantService';

const ListPlantComponent = () => {

    const [plants, setPlants] = useState([])

    const getAllPlants = () => {
        PlantService.getAllPlants().then((response) => {
            console.log("DATA:",response.data)
            setPlants(response.data)
            // console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        getAllPlants();
    },[])
    
  

    const deletePlant = (plantId) => {
        console.log(plantId);
       PlantService.deletePlant(plantId).then((response) =>{
        //    console.log("djaisdog;jsdakgo;sja")
        getAllPlants();

       }).catch(error =>{
           console.log(error);
       })
        
    }

  return (<div className='container'>
      <h2 className='text-center'> Plant List </h2>
      <Link to = "/add-plant" className = "btn btn-primary mb-2" > Add Plant </Link>
      <table className='table table-bordered table-striped'>
          <thead>
          <tr>
              <th>Plant ID</th>
              <th>Scientific Name</th>
              <th>Common Name</th>
              <th>Plant Height</th>
              <th>Plant Spacing</th>
              <th>Annual</th>
              <th>Germination Time</th>
              <th>Planting Depth</th>
              <th>Planting Soil Temp</th>
              <th>Actions</th>
          </tr></thead>
          <tbody>
              {plants.map(plant => {
                        console.log("PLANTID", plant.plantId);

                      return <tr key={plant.plantId}>
                          {/* <th>{plant.plantId}</th> */}
                          <td> {plant.plantId} </td>
                          <td> {plant.sciName} </td>
                          <td> {plant.commonName} </td>
                          <td> {plant.plantHeight} </td>
                          <td> {plant.plantSpacing} </td>
                          <td> {plant.annual} </td>
                          <td> {plant.plantGermTime} </td>
                          <td> {plant.plantSeedDepth} </td>
                          <td> {plant.plantSoilTemp} </td>
                          <td>
                          <Link className="btn btn-info" to={`/edit-plant/${plant.plantId}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() =>{

                                        deletePlant(plant.plantId)}}
                                    style = {{marginLeft:"1px"}}> Delete</button>
                          </td>
                      </tr>}
                  )

              }
          </tbody>
      </table>

  </div>);
};

export default ListPlantComponent;
