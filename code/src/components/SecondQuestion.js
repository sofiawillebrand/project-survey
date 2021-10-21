import React from 'react'

const SecondQuestion = (props) => {
  const {surnameInput, onSurnameInputChange, onStepChange} = props

  return (
      <form className="form">
        <label htmlFor="surnameInput">Type your surname</label>
          <input 
            id="surnameInput" 
            type="text" 
            value={surnameInput} 
            onChange={onSurnameInputChange} 
            className="form-element"
          />
      <button 
        disabled={surnameInput === ''}
        onClick={onStepChange}
        className="form-element">
          Next question
      </button>
      </form>
  )
}

export default SecondQuestion