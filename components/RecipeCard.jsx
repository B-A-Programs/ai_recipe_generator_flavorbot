'use client'

import Image from "next/image"
import { useState } from "react"
import RecipeModalEdit from "./RecipeModalEdit"

const RecipeCard = ({ image, title, ingredients, instructions, recipeId, refresh }) => {
    const [isShowing, setIsShowing] = useState(false)

    return (
        <>
        <div className="flex-center flex-col rounded-2xl drop-shadow-card">
            <div className="flex-center group relative cursor-pointer" onClick={() => setIsShowing(true)}>
                <Image 
                    src={image}
                    width={250}
                    height={200}
                    className="object-cover rounded-2xl"
                    alt="Recipe image"
                />

                <div className="hidden group-hover:flex recipe_card-title">
                    <p className="w-full">{title}</p>
                </div>
            </div>
        </div>

        {isShowing && <RecipeModalEdit title={title} image={image} ingredients={ingredients} instructions={instructions} recipeId={recipeId} refresh={refresh} handleClose={() => setIsShowing(false)} />}
        </>
    )
}

export default RecipeCard