import { Schema, model, models } from "mongoose"

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
    },
    image: {
        type: String,
    },
    instructions: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe