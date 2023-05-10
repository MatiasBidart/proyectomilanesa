import { React, useState, useEffect} from 'react'


const GbProfit = ({data}) => {
    const [stateId, setStateId] = useState('Choose GBs')
const [counterIndex, setCounterIndex] = useState(0)


const handleClick = ()=>{
    setCounterIndex(counterIndex + 1 ) 
}

useEffect(() => {
    if(counterIndex >= data.length ) {
        setCounterIndex(1)
        setStateId(data[1])
      
    
    } else {
        setStateId(data[counterIndex])
    }

    localStorage.setItem('index', counterIndex) 

}, [handleClick])






  return (
    <div className='button-div'>
    <button onClick={handleClick} className='gb-chsr background-color' >
        <h6 className="letrero">{stateId}</h6>
    </button>
    </div>
  )
}

export default GbProfit
