import React from 'react';
import T from 'prop-types';

function APIErrorMesage({ message }) {
  const [httpStatusCode] = message.match(/\d{3}/i);
  let errorMessage;

  switch (httpStatusCode) {
    case '404':
    case '401':
      errorMessage = 'Incorrect email or password.';
      break;

    case '409':
      errorMessage = 'Email already exists.';
      break;

    default:
      errorMessage = 'Something went wrong. Please try again.';
  }

  const errorBoxStyle = {
    border: '2px solid #e84118',
    margin: '20px 0',
    padding: ' 10px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#e84118',
    minWidth: '424px',
    textAlign: 'center',
  };

  return (
    <div>
      <div id="error" style={errorBoxStyle}>
        {errorMessage}
      </div>
    </div>
  );
}

APIErrorMesage.propTypes = {
  message: T.string,
};

export default APIErrorMesage;
