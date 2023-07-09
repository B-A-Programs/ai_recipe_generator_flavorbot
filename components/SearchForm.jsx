'use client'

import { useState, Fragment } from 'react'
import cuisines from '@constants/cuisines'
import CuisineComboBox from './CuisineComboBox';
import { useSession } from 'next-auth/react';
import Image from 'next/image';


const SearchManufacturer = () => {
  const [cuisine, setCuisine] = useState('');
  const [query, setQuery] = useState('');
  const { data: session, status } = useSession()

  const filteredCuisines = query === "" 
    ? cuisines 
    : cuisines.filter((item) => (
      item.toLowerCase().replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

  return (
    <>
        {session?.user ?
        <form className='mt-14 flex-center gap-12'>
            <div className='flex-center flex-col gap-2'>
                <label for="query" className='font-extrabold font-inter text-stone-600 text-xl'>Recipe description</label>
                <input id="query" className='search-cuisine__input' placeholder="Egs: chicken, pizza diavola, etc." type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className='flex-center flex-col gap-2'>
                <label for="cuisine" className='font-extrabold font-inter text-stone-600 text-xl'>Cuisine</label>
                <CuisineComboBox cuisine={cuisine} setCuisine={setCuisine} id="cuisine" />
            </div>

            <button type="submit" className='mt-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-bold py-3 px-8 flex gap-2'><Image src="search.svg" width={25} height={25} alt="search icon" />Search</button>
        </form>
        : 
        <div className='mt-12 text-xl text-stone-500 font-extrabold'>
            Please log in to search for recipes.
        </div>}
    </>
  )
}

export default SearchManufacturer