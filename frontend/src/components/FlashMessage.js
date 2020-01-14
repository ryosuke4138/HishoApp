import React from 'react';

export default function FlashMessage({message}) {
  return (
    <div>
      <p>error: {message}</p>
    </div>
  )
}

FlashMessage.defaultProps = {
  message: 'An error occurred',
};