import React from 'react'

const SecondQuestion = (props) => {
  const {addressInput, onAddressInputChange, onStepChange} = props

  return (
      <form className="form">
        <label 
          htmlFor="addressInput" 
          className="form-label">
            Type your address
        </label>
        <input 
          id="addressInput" 
          type="text" 
          value={addressInput} 
          onChange={onAddressInputChange} 
          className="form-element"
          placeholder="city citycode"
        />

        <div className="button-container">
          <button onClick={() => onStepChange("back")} className="form-button bouncy">Go back</button>
          <button 
            disabled={addressInput === ''}
            onClick={() => onStepChange("next")}
            className="form-button bouncy">
              Next question
          </button>
        </div>
        {(addressInput === '') && <p className="error">Please fill in your e-mail</p>}
        
      </form>
  )
}

export default SecondQuestion