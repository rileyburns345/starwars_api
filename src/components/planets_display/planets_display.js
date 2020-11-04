import React from 'react'

const PlanetDisplay = props => {
    const {planet} = props
    console.log('planettt:', planet)

    let planetData

    if (typeof planet === 'object') {
        planetData = <div>
                        <p>Planet Display</p>
                        <h1>{planet.name}</h1>
                        <h3>Climate: {planet.climate}</h3>
                        <h3>Terrain: {planet.terrain}</h3>
                        <h3>Gravity: {planet.gravity}</h3>
                        <h3>Population: {planet.population}</h3>
                    </div>
    }
    else {
        planetData = ''
    }

    return (
        <div>
            {planetData}
        </div>
    )
}

export default PlanetDisplay