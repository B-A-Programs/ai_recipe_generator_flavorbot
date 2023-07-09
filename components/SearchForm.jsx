'use client'

import { useState, Fragment, useEffect } from 'react'
import cuisines from '@constants/cuisines'
import CuisineComboBox from './CuisineComboBox';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import RecipeModalSave from './RecipeModalSave';


const SearchManufacturer = () => {
    const [cuisine, setCuisine] = useState('');
    const [query, setQuery] = useState('');
    const [message, setMessage] = useState('');
    const [recipe, setRecipe] = useState([]);

    const { data: session, status } = useSession();

    const filteredCuisines = query === ""
        ? cuisines
        : cuisines.filter((item) => (
            item.toLowerCase().replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        ))

    const initRecipe = async () => {
        let response
        if(cuisine === "") 
            response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${query}&number=6&addRecipeInformation=true`)
        else
            response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${query}&number=6&addRecipeInformation=true&cuisine=${cuisine}`)

        const result = await response.json()

        if(result.results.length === 0) {
            setMessage('No results found. Please try again.')
            setRecipe([])
            return;
        }

        console.log(await result)

        setRecipe(await result.results[(Math.floor(Math.random() * result.results.length))])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (query === "") {
            setMessage('Please fill in the recipe field the fields.');
            return;
        }

        await initRecipe()

        setCuisine('')
        setQuery('')
    }

    return (
        <>
            {session?.user ?
                <form className='mt-14 flex-center gap-12' onSubmit={handleSubmit}>
                    <div className='flex-center flex-col gap-2'>
                        <label htmlFor="query" className='font-extrabold font-inter text-stone-600 text-xl'>Recipe description</label>
                        <input id="query" className='search-cuisine__input' placeholder="Egs: chicken, pizza, pasta etc." type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                    <div className='flex-center flex-col gap-2'>
                        <label htmlFor="cuisine" className='font-extrabold font-inter text-stone-600 text-xl'>Cuisine</label>
                        <CuisineComboBox cuisine={cuisine} setCuisine={setCuisine} id="cuisine" />
                    </div>

                    <button type="submit" className='mt-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-lg font-bold py-3 px-8 flex gap-2'><Image src="search.svg" width={25} height={25} alt="search icon" />Search</button>
                </form>
                :
                <div className='mt-12 text-xl text-stone-500 font-extrabold'>
                    Please log in to search for recipes.
                </div>
            }

            {recipe?.length !== 0 && recipe != undefined && <RecipeModalSave recipe={recipe} setRecipe={setRecipe} setMessage={setMessage} />}

            {message && <div className='mt-16 error'>{message}</div>}
        </>
    )
}

export default SearchManufacturer