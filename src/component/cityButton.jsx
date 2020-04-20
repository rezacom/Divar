import React from 'react'



export default function CityButton(props) {

    const handleDataId = (e) => {
        const cityId = e.target.id
        props.handleId(cityId)    
    }

    return (
        <button className="city-button" id={props.dateId} onClick={handleDataId}>
            {props.city}
        </button>
    )
}
