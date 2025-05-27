import React from 'react'
import Button from '@mui/material/Button';
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div>
        <div className='w-full bg-gray-300 h-[45px] rounded-lg p-2 flex'>
            <input type='text' placeholder='Search for Products' className='w-full  bg-inherit focus:outline-none p-2 text-gray-700' />
            <Button><FiSearch size={23} color='black' /></Button>
        </div>
    </div>
  )
}

export default Search