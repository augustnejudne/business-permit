import React from 'react';

const TextInput = props => {
  const id = props.label.toLowerCase().split(' ').join('-')
  return (
    <div className={`input-field col ${props.cols ? props.cols : 's12 m6'}`}>
      <input
        id={id}
        type="text"
        className="validate"
        onChange={() => console.log()}
      />
      <label htmlFor={id}>{props.label}</label>
    </div>
  );
};

export default TextInput;
