import Recipe from "@models/recipe"
import { connectToDB } from "@utils/database"

export const POST = async (req) => {
    const {title, image, instructions, ingredients, userId} = await req.json();

    try {
        await connectToDB()
        
        await Recipe.create({
            title: title, 
            image: image, 
            instructions: instructions, 
            ingredients: ingredients,
            creator: userId,
        })
        
        return new Response("Recipe created successfully", {status: 200})
    } catch (error) {
        return new Response("Failed to create recipe", {status: 500})
    }
}