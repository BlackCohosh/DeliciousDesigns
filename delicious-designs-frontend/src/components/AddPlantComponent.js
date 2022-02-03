import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import PlantService from '../services/PlantService'

const AddPlantComponent = () => {

    const [sciName, setSciName] = useState('')
    const [commonName, setCommonName] = useState('')
    const [plantHeight, setPlantHeight] = useState('')
    const [plantSpacing, setPlantSpacing] = useState('')
    const [annual, setAnnual] = useState('')
    const [plantGermTime, setPlantGermTime] = useState('')
    const [plantSeedDepth, setPlantSeedDepth] = useState('')
    const [plantSoilTemp, setPlantSoilTemp] = useState('')
    const history = useNavigate();
    const {id} = useParams();

    const saveOrUpdatePlant = (e) => {
        e.preventDefault();

        const plant = {sciName, commonName, plantHeight}

        if(id){
            PlantService.updatePlant(id, plant).then((response) => {
                history.push('/plants')
            }).catch(error => {
                console.log(error)
            })

        }else{
            PlantService.createPlant(plant).then((response) =>{

                console.log(response.data)
    
                history.push('/plants');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        PlantService.getPlantByTd(id).then((response) =>{
            setSciName(response.data.sciName)
            setCommonName(response.data.commonName)
            setPlantHeight(response.data.plantHeight)
            setPlantSpacing(response.data.plantSpacing)
            setAnnual(response.data.plantAnnual)
            setPlantGermTime(response.data.plantGermTime)
            setPlantSeedDepth(response.data.plantSeedDepth)
            setPlantSoilTemp(response.data.plantSoilTemp)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Plant</h2>
        }else{
            return <h2 className = "text-center">Add Plant</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Scientific Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter scientific name"
                                        name = "sciName"
                                        className = "form-control"
                                        value = {sciName}
                                        onChange = {(e) => setSciName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Common Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter common name"
                                        name = "commonName"
                                        className = "form-control"
                                        value = {commonName}
                                        onChange = {(e) => setCommonName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Plant Height :</label>
                                    <input
                                        type = "plantHeight"
                                        placeholder = "Enter Plant Height"
                                        name = "plantHeight"
                                        className = "form-control"
                                        value = {plantHeight}
                                        onChange = {(e) => setPlantHeight(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Plant Spacing :</label>
                                    <input
                                        type = "plantSpacing"
                                        placeholder = "Enter plant spacing"
                                        name = "plantSpacing"
                                        className = "form-control"
                                        value = {plantSpacing}
                                        onChange = {(e) => setPlantSpacing(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Annual :</label>
                                    <input
                                        type = "annual"
                                        placeholder = "Is it an annual?"
                                        name = "annual"
                                        className = "form-control"
                                        value = {annual}
                                        onChange = {(e) => setAnnual(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Plant Germination Time :</label>
                                    <input
                                        type = "plantGermTime"
                                        placeholder = "Enter germination time"
                                        name = "plantGermTime"
                                        className = "form-control"
                                        value = {plantGermTime}
                                        onChange = {(e) => setPlantGermTime(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Planting Seed Depth :</label>
                                    <input
                                        type = "plantSeedDepth"
                                        placeholder = "Enter seed depth"
                                        name = "plantSeed Depth"
                                        className = "form-control"
                                        value = {plantSeedDepth}
                                        onChange = {(e) => setPlantSeedDepth(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Planting Soil Temperature :</label>
                                    <input
                                        type = "plantSoilTemp"
                                        placeholder = "Enter planting soil temperature"
                                        name = "plantSoilTemp"
                                        className = "form-control"
                                        value = {plantSoilTemp}
                                        onChange = {(e) => setPlantSoilTemp(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdatePlant(e)} >Submit </button>
                                <Link to="/plants" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddPlantComponent