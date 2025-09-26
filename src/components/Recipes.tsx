import { useEffect, useState } from "react";
import recipedata from '../mock/recipesData.json';
import RecipeReviewCard from "./recipeCards";
import { Box } from "@mui/material";

async function fetchUsers(): Promise<any[]> {
        //const recipeIdsData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=Indian&number=20`);
        // const data = (await recipeIdsData.json()).results;
        //let listRecipes = data.map((temp: { id: any; }) => temp.id).join(',');
        //console.log("List is", listRecipes)
        //const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${import.meta.env.VITE_API_KEY}&ids=${listRecipes}`);
        const response = recipedata;
        return response;
}
function Recipes() {
        const [recipes, setRecipes] = useState<any[]>([]);
        useEffect(() => {
                fetchUsers().then(data => setRecipes(data));
        }, []);

        return (
                <Box
                        sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
                                gap: 2,
                                p: 3
                        }}
                >
                        {recipes.map((recipe) => (
                                <RecipeReviewCard recipeData={recipe} />
                        ))}
                </Box>
        );
}
export default Recipes
