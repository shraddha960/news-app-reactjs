import React from 'react'
import loading from './25.gif';

const Spinner = () => {
    return (
      <div className='text-center'>
            <img src={loading} alt="loading"/>
      </div>
    )
}

export default Spinner;