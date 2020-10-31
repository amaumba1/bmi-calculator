import React from 'react'


const App = () => {
  return (
    <div className='container'>
      <div className='row center'>
        <h1 className='white-text'> BMI Tracker </h1>
      </div>
      <div className='row'>
        <div className='col m12 s12'>
          <div>
            <div className='row center'>
              <h4 className='white-text'>7 Day Data</h4>
            </div>
            <div className='data-container row'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App