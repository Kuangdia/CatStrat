import React, { useEffect, useState } from 'react';

export default function ToggleButton(props) {
  const { buttonName, buttonOnClick } = props;
  return (
    <button 
      className='ld__head__button'
      onClick = { buttonOnClick }>
      { buttonName }
    </button>
  );
}
