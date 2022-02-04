import axios from 'axios'

const PLANT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/plants';

class PlantService{

    getAllPlants(){
        return axios.get(PLANT_BASE_REST_API_URL)
    }
    createPlant(plant){
        return axios.post(PLANT_BASE_REST_API_URL, plant)
    }
    getPlantById(plantId){
        return axios.get(PLANT_BASE_REST_API_URL + '/' + plantId);
    }
    updatePlant(plantId, plant){
        return axios.put(PLANT_BASE_REST_API_URL + '/' +plantId, plant);
    }
    deletePlant(plantId){
        
        return axios.delete(PLANT_BASE_REST_API_URL + '/' + plantId);
    }
}

export default new PlantService();