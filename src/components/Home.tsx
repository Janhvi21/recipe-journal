import { Box, Container, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import RecipeSearchComponent from "./recipeSearchComponent"
import RecipeReviewCard from "./recipeCards";
import recipedata from '../mock/recipesData.json';

function Home() {
        const recipes = recipedata;
        return (
                <Container>
                        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignContent: 'center', height: '70vh', flexDirection: 'column', mx: 2 }}>
                                <Typography gutterBottom variant="h2" component="div">
                                        The Recipe Journal
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                        Discover and Organize Your Favorite Recipes
                                </Typography>
                                <Box sx={{ mt: 4, mx: 'auto', width: { xs: '100%', sm: '80%', md: '70%', lg: '70%' } }}>
                                        <RecipeSearchComponent /></Box>

                        </Box>
                        <Box sx={{ height: '80vh', flexDirection: 'column', p: 2 }}>
                                <Typography gutterBottom variant="h4" component="div">
                                        Featured Recipes
                                </Typography>
                                <Box sx={{ p: 2, width: '200%' }}>
                                        <Grid
                                                container
                                                wrap="nowrap" // Prevents items from wrapping to the next line
                                                sx={{
                                                        flexDirection: 'row',
                                                        overflowX: 'auto', // Enables horizontal scrolling when items exceed container width
                                                        gap: 2, // Sets the spacing between grid items
                                                }}
                                        >
                                                {recipes.map((recipe) => (
                                                        <RecipeReviewCard recipeData={recipe} isSmall="true" />
                                                ))}
                                        </Grid>
                                </Box>

                        </Box>
                </Container >
        )
}

export default Home
