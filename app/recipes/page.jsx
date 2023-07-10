'use client'

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
        <h1>Recipes for user</h1>
    </main>
  )
}
