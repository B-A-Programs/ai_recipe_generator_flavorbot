import Recipe from "@models/recipe"
import { connectToDB } from "@utils/database"

export const POST = async (req) => {
    const { title, ingredients, instructions, recipeId } = await req.json()

    try {
        await connectToDB()
        
        const recipe = await Recipe.findById(recipeId)

        recipe.title = title
        recipe.ingredients = ingredients
        recipe.instructions = instructions

        recipe.save()
        
        return new Response("Successfuly updated recipe", {status: 200})
    } catch (error) {
        return new Response("Failed to update", {status: 500})
    }
}