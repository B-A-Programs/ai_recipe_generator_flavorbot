import Recipe from "@models/recipe"
import { connectToDB } from "@utils/database"

export const POST = async (req) => {
    const {recipeId} = await req.json();

    try {
        await connectToDB()
        
        await Recipe.findByIdAndDelete(recipeId)
        
        return new Response("Recipe deleted successfully", {status: 200})
    } catch (error) {
        return new Response("Failed to delete recipe", {status: 500})
    }
}