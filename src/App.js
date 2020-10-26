import React, { useState, useEffect } from 'react';
import './App.css';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';

function App() {
  const [currentStep, setCurentStep] = useState(1);

  const stepManager = (e, type = null) => {
    e.preventDefault();
    if (type === 'prev') {
      if (currentStep === 1) return;
      setCurentStep(currentStep - 1);
    }
    if (type === 'next') {
      if (currentStep === 3) return;
      setCurentStep(currentStep + 1);
    }
  };

  useEffect(() => {
    const progressElement = document.getElementById('progressBar');
    progressElement.style.animationName = `brdr-step${currentStep}`;
  }, [currentStep]);

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='main'>
          <div className='step' id='step1'>
            1
          </div>
          <div className='step' id='step2'>
            2
          </div>
          <div className='step' id='step3'>
            3
          </div>
        </div>
        <div className='progress' id='progressBar' />
        <div className='body'>
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
        </div>
        <div className='footer'>
          <button onClick={(e) => stepManager(e, 'prev')}>Previous</button>
          <button onClick={(e) => stepManager(e, 'next')}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
