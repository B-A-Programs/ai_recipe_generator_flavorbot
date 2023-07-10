import Recipe from "@models/recipe"
import User from "@models/user"
import { connectToDB } from "@utils/database"
import { getServerSession } from "next-auth"

export const GET = async (req) => {
    const session = await getServerSession(req)

    try {
        await connectToDB()
        
        const user = await User.findOne({email: session.user.email})

        const recipes = await Recipe.find({creator: user})
        
        return new Response(JSON.stringify({recipes: recipes}), {status: 200})
    } catch (error) {
        return new Response("Failed to find recipes", {status: 500})
    }
}