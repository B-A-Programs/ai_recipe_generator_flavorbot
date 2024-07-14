# FlavorBot

FlavorBot is a recipe management application designed to help users discover, save, and organize recipes based on their preferences. With FlavorBot, users can search for recipes by specifying the recipe's name and/or cuisine, save their favorite recipes, and access them later, also being able to edit them.

## Website

https://flavourbot-6928330ae8c4.herokuapp.com/

## Features

- **Recipe Search**: Users can search for recipes by specifying the recipe's name and/or cuisine, making it easy to find recipes tailored to their preferences.
- **Recipe Saving**: Users can save recipes they like, allowing them to create a personalized collection of favorite recipes for easy access.
- **Recipe Editing**: Saved recipes can be edited later, allowing users to customize them based on their preferences or dietary restrictions.

## Tech Stack

- **Framework**: Next.js
- **User Management**: NextAuth
- **Database**: MongoDB
- **ORM**: Mongoose
- **UI Design**: Headless UI

## Installation

1. Clone the repository:

   ```git clone https://github.com/yourusername/ai_recipe_generator_flavorbot```

2. Navigate to the project directory:

   ```cd ai_recipe_generator_flavorbot```

3. Install dependencies:

   ```npm install```

4. Set up environment variables:

   ~~~
   MONGODB_URI=your-uri

   GOOGLE_ID=your-google-id
   GOOGLE_CLIENT_SECRET=your-secret
  
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_URL_INTERNAL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret
  
   NEXT_PUBLIC_SPOONACULAR_API_KEY=your-api-key
   ~~~
5. Run the development server:

   ```npm run dev```

6. Open your browser and navigate to `http://localhost:3000` to access FlavorBot.

## Contributing

Contributions are welcome! If you'd like to contribute to FlavorBot, please fork the repository and submit a pull request with your changes.
