'use client'

import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import cuisines from '@constants/cuisines'

const CuisineComboBox = ({cuisine, setCuisine}) => {
  const [query, setQuery] = useState('');

  const filteredCuisines = query === "" 
    ? cuisines 
    : cuisines.filter((item) => (
      item.toLowerCase().replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))

  return (
    <div>
        <Combobox value={cuisine} onChange={setCuisine}>
            <div className='relative w-full'>
            <Combobox.Input 
                className="search-cuisine__input" 
                placeholder='Egs: Indian, Chinese, Italian, etc.'
                displayValue={cuisine}
                onChange={(e) => setQuery(e.target.value)}
            />

            <Transition 
                as={Fragment} 
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
            >
                <Combobox.Options className="search-cuisine__options">
                {filteredCuisines.map((item) => (
                    <Combobox.Option value={item} key={item} className={({active}) => `relative search-cuisine__option ${active ? 'bg-blue-500 text-white' : 'text-gray-900'}`}>
                    {({ selected }) => (
                        <>
                            <span className={`block truncate ${selected ? "font-bold" : "font-normal"}`}>
                            {item}
                            </span>
                        </>
                        )}
                    </Combobox.Option>
                ))
                }
                </Combobox.Options>
            </Transition>
            </div>
        </Combobox>
    </div>
   )
}

export default CuisineComboBox