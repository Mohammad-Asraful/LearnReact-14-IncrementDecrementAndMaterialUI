import React from 'react'
import Clock from 'react-digital-clock';


const DigitalClock = () => {
   return (
      <>
         <div style={{
            backgroundColor: 'brown',
            fontSize: '50px',
            display: 'flex',
            justifyContent: 'center'
         }}>
            <Clock />
         </div>
      </>
   )
}

export default DigitalClock