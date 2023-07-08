import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{2,24}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 2-24 alphanumeric letters and be unique!"]
    },
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    image: {
        type: String
    }
})

const User = models.User || model("User", UserSchema);

export default User;