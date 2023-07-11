'use client'

import RecipeCard from '@components/RecipeCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [recipes, setRecipes] = useState("")

  const fetchRecipes = async () => {
    const response = await fetch("/api/recipe")

    const result = await response.json()
  
    setRecipes(result.recipes)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])
    
  return (
    <main>
        {recipes && <div className='head_text text-center py-14'><span className='orange_gradient'>View your saved recipes!</span></div>}
        <div className="flex-center flex-wrap gap-12 py-6">
            {recipes ? 
            recipes.map((recipe) => (
              <RecipeCard title={recipe.title} image={recipe.image} ingredients={recipe.ingredients} instructions={recipe.instructions} />
            ))
            : <p className='flex-center mt-32 text-gray-600 text-xl font-bold'>Looks like you don't have any saved recipes yet</p>
            }
        </div>
    </main>
  )
}
