import React, { useState } from 'react'

function ChercherBar({setType}) {
  
    const [query, setQuery] = useState('')

    return (
        <div className='chercher-bar'>
            Component ChecherBar

            <input 
                type="text" 
                placeholder="Chercher un mot clé" 
                onChange={(e) => setQuery(e.target.value)} 
                value={query} 
            />

            <button onClick={() => setType(query)}>
                Chercher
            </button>
        </div>
    )
}

export default ChercherBar