import React, { useState } from 'react'
import '../components/layout.css';
function Steps() {
    const[val,setVal] = useState(1);
    const[data,setData] = useState(true);
    const handleNext =() =>{
        if(val <  3){
 setVal(val + 1);
        }
        else{
           alert('No more steps');
        }
       
    }
    const handlePrevious = () =>{
         if(val >  1){
 setVal(val - 1);
        }
        else{
            alert('Already at first step');
        }
    }
    const handleClosed = () =>{
        setData('')
    }
  return (
    <>
    {data ?<section className='stepSection'>
        
        <i class="material-icons" onClick={handleClosed}>close</i>
        <aside> 
            <span className={val === 1 ? 'active' : ''}>1</span>
            <span className={val === 2 ? 'active' : ''}>2</span>
            <span className={val === 3 ? 'active' : ''}>3</span>
        </aside>
        <h1>{val === 1 ? 'Step One is here'
        :val === 2 ? 'Step Two is here'
        :val === 3 ? 'Step Three is here': null}</h1>
        <aside>
            
            <button  onClick={handlePrevious} disabled={val === 1}>Previous</button>
            <button onClick={handleNext} disabled={val === 3}>Next</button>
        </aside>
    </section> : <h1>No Data Found</h1>}
    </>
  )
}

export default Steps