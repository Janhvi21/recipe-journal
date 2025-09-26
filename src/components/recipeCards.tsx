import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Chip, Fab } from '@mui/material';
import { Box } from '@mui/system';
import RestaurantMenuOutlined from '@mui/icons-material/RestaurantMenuOutlined';

const ActionAreaCard: FC<any> = ({ recipeData, isSmall = false }) => {
        //console.log("Recipe data is", recipeData);
        return (
                <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                                <CardMedia
                                        component="img"
                                        height={isSmall ? "100" : "250"}
                                        src={recipeData.image}
                                        alt="Recipe Image"
                                />
                                <CardContent>
                                        <Typography gutterBottom variant={isSmall ? "h8" : "h3"} component="div">
                                                {recipeData.title}
                                        </Typography>

                                        {isSmall !== "true" && (
                                                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                                                        <Box sx={{ display: 'flex' }}>
                                                                {recipeData.readyInMinutes} mins | Servings: {recipeData.servings}
                                                        </Box>
                                                        <Box sx={{ display: 'flex', mt: 1, mb: 1 }}>
                                                                <RestaurantMenuOutlined sx={{ mr: 0.2 }} />
                                                                {recipeData.cuisines && recipeData.cuisines.length > 0 && recipeData.cuisines.join(', ')}
                                                        </Box>

                                                        <Box sx={{ mt: 1 }}>
                                                                {recipeData.diets && recipeData.diets.length > 0 && recipeData.diets.map((diet: string) => (
                                                                        <Chip sx={{ m: 0.3 }} key={diet} label={diet} variant="outlined" size="small" />
                                                                ))}
                                                        </Box>
                                                </Typography>
                                        )}
                                </CardContent>
                        </CardActionArea>
                </Card>
        );
};

export default ActionAreaCard;