import { React, useState, useEffect} from 'react'


const AtomProfit = () => {
    const [stateId, setStateId] = useState('Choose Color')
const [counterIndex, setCounterIndex] = useState(0)

const data = [ 'Elegir Color', 'Blanco', 'Rosa', 'Negro', 'Dorado' ]
const handleClick = ()=>{
    setCounterIndex(counterIndex + 1 )   
}

useEffect(() => {
    if(counterIndex >= 5 ) {
        setCounterIndex(1)
        setStateId(data[1])
    
    } else {
        setStateId(data[counterIndex])
    }
    localStorage.setItem('color', data[counterIndex]) 


}, [handleClick])






  return (
    <div className='button-div'>
    <button onClick={handleClick} className='clr-chsr background-color' >
        <h6 className="letrero">{stateId}</h6>
    </button>
    </div>
  )
}

export default AtomProfit
