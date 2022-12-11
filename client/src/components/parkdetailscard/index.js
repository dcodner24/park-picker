import React from 'react';
import Weather from '../weather';
import Map from '../map';
// import { useNavigate } from "react-router-dom";
import "./style.css"

function ParkDetailsCard(props) {

    // const navigate = useNavigate();
    const searchResults = props.data.result.data;
    const userLatLon = props.data.location;
    const parkId = props.data.id;
    // console.log(props)
    // console.log(searchResults);
    // console.log(userLatLon);
    // console.log(parkId);

    const parkData = searchResults.filter((elem) => elem.id === parkId)[0];

    console.log(parkData)

    return (
        <div className='container rowse'>
            <div className='column1'>
                <div id="park-details">
                    {/* Default park image, get it from the API call */}
                    <img className='parkDimg' width={"100%"} height={"100%"} src={parkData.images[0].url} alt={parkData.images[0].altText} />
                </div>
            </div>
            <div className='column2'>

                <header>
                    <h1 id="park-name">{parkData.fullName}</h1>

                </header>
                <div>
                    <div className="column is-justify-content-center" id="park-desc">
                        {/* Default park description, get it from the API call */}
                        {parkData.description}
                    </div>
                </div>
            </div>
            <div>
                <div id="map-parent">
                    {/* Default Map location, import subcomponent */}
                    <Map coords={[{ lat: parkData.latitude, lng: parkData.longitude }, userLatLon]} />
                </div>
            </div>
            <div id="weather">
                {/* Default weather location, import subcomponent */}
                <Weather coord={{ lat: parkData.latitude, lng: parkData.longitude }} />
            </div>
        </div>
    );
}

export default ParkDetailsCard;