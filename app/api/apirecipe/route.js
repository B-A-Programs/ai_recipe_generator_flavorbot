export const POST = async (req) => {
    const {query, cuisine} = await req.json();

    try {
        let response;
        if(query === "")
            response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=a&number=6&addRecipeInformation=true&cuisine=${cuisine}&addRecipeInstructions=true`)

        if(cuisine === "") 
            response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${query}&number=6&addRecipeInformation=true&addRecipeInstructions=true`)
        else
            response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}&query=${query}&number=6&addRecipeInformation=true&cuisine=${cuisine}&addRecipeInstructions=true`)

        response = await response.json()

        return new Response(JSON.stringify({response}), {status: 200})
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch recipe", {status: 500})
    }
}