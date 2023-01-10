import React from 'react'

function ResultatList({list}) {
  return (
    <div className='result-box'>
        Component ResultatList

        <ul>
            {
                list.map((element) => <li>{element.nom}</li>)
            }
        </ul>
    </div>
  )
}

export default ResultatList