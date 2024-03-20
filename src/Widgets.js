import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='Widgets__input'>
        <SearchIcon className='widgets__searchIcon'/>
        <input placeholder='Search X' type='text' />
      </div>

      

    </div>
  )
}

export default Widgets