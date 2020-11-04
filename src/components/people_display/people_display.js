import React from 'react'

const PeopleDisplay = props => {
    const {people} = props
    console.log('people:', people)
    console.log('people.length', people.length)

    let personData
    if (typeof people === 'object') {
        personData = <div>
                        <p>People Display</p>
                        <h1>{people.name}</h1>
                        <h3>Height: {people.height} cm</h3>
                        <h3>Mass: {people.mass} kg</h3>
                        <h3>Hair Color: {people.hair_color}</h3>
                        <h3>Skin Color: {people.skin_color}</h3>
                    </div>
    }
    else {
        personData = ''
    }

    return (
        <div>
            {personData}
        </div>
    )
}

export default PeopleDisplay