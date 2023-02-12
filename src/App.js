import React, { useState } from 'react';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


function App() {

  const [increment, setIncrement] = useState(0)

  const incNum = () => {
    setIncrement(increment + 1)
  }
  // 
  const decNum = () => {
    if (increment > 0) {
      setIncrement(increment - 1)
    } else {
      setIncrement(0)
      alert('Sorry, Zero Limit Reached')
    }
  }

  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <h1>{increment}</h1>
          <div className='btn-div'>
            <Tooltip title='Increase Number'>
              <Button className='btn-green' onClick={incNum}>
                <AddIcon />
              </Button>
            </Tooltip>

            {/*  */}

            <Tooltip title='Decrease Number'>
              <Button className='btn-red' onClick={decNum}>
                <RemoveIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
