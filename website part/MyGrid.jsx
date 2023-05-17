import React from 'react';
import Heart from './Heart';
import Cancer from './Breast_cancer';
import Diabetes from './Diabetes';
import Mental_health from './Mental_health';
import ButtonGroup from '@mui/material/ButtonGroup';
import MovingComponent from 'react-moving-text'

function MyGrid() {

  return <>

    <div className="App">
      <img style={{ backgroundColor: 'white', position: 'absolute', top: 100, left: 0, height: 720 }} src={"bckg.jpg"} className="App-background" alt="background" />

      <ButtonGroup style={{ position: 'absolute', width: 500, left: 20, top: 450 }}>
        <Diabetes />
      </ButtonGroup>

      <ButtonGroup style={{ position: 'absolute', width: 500, left: 225, top: 450 }}>
        <Cancer />
      </ButtonGroup>

      <ButtonGroup style={{ position: 'absolute', width: 500, left: 20, top: 515 }}>
        <Heart />
      </ButtonGroup>

      <ButtonGroup style={{ position: 'absolute', width: 500, left: 225, top: 515 }}>
        <Mental_health />
      </ButtonGroup>

      <div id="container" style={{ position: 'absolute', width: 1000, left: 20, top: 150 }}>

        { }

        <MovingComponent style={{ position: 'absolute', left: 0, top: -50 }}
          type="effect3D"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none">
          <h1>Making HealthCare Better Together</h1>
        </MovingComponent>

        { }
        <h3 id="a" style={{ color: 'black', textAlign: 'left' }}>
          Getting sick is a pain. Urgent care shouldn't be? Yes, you deserve better healthcare
        </h3>
        <h3 id="a" style={{ color: 'black', textAlign: 'left' }}>Here we are determined for your better life</h3>
      </div>

    </div>

  </>
}
export default MyGrid