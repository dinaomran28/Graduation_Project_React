import React from 'react';
import useStyles from './styles';
import { Box, Button, Card, CardMedia, CardContent, CardActions, Chip, Typography, Grid } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Favourites = ({ favourites, handleRemoveItem }) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Favourites <FavoriteIcon style={{ color: 'red' }} /></Typography>
            <br />
            {console.log(favourites)}
            <Grid container spacing={3} className={classes.list}>
                {
                    Object.keys(favourites).map((place, i) => {
                        return (
                            <Card elevation={6} key={i}>
                                <CardMedia
                                    style={{ height: 350 }}
                                    image={favourites[place].photo ? favourites[place].photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                    title={favourites[place].name}
                                />
                                <CardContent>
                                    <Box display='flex' justifyContent="space-between">
                                        <Typography gutterBottom variant='h5'>{favourites[place].name}</Typography>
                                        <Button onClick={() => handleRemoveItem(place)}>Remove<DeleteForeverIcon /></Button>
                                    </Box>
                                    <Box display='flex' justifyContent="space-between">
                                        <Rating value={Number(favourites[place].rating)} readOnly />
                                        <Typography gutterBottom variant='subtitle1'>Out of {favourites[place].num_reviews} Reviews</Typography>
                                    </Box>
                                    <Box display='flex' justifyContent="space-between">
                                        <Typography variant='subtitle1'>Price</Typography>
                                        <Typography gutterBottom variant='subtitle1'>{favourites[place].price_level}</Typography>
                                    </Box>
                                    <Box display='flex' justifyContent="space-between">
                                        <Typography variant='subtitle1'>Open Time</Typography>
                                        <Typography gutterBottom variant='subtitle1'>{favourites[place].open_now_text}</Typography>
                                    </Box>
                                    <Box display='flex' justifyContent="space-between">
                                        <Typography variant='subtitle1'>Ranking</Typography>
                                        <Typography gutterBottom variant='subtitle1'>{favourites[place].ranking}</Typography>
                                    </Box>
                                    {favourites[place] ? favourites[place].awards ? favourites[place].awards.map((award) => (
                                        <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                                            <img src={award.images.small} alt={award.display_name} />
                                            <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
                                        </Box>
                                    )) : '' : ''}
                                    {favourites[place] ? favourites[place].cuisine ? favourites[place].cuisine.map(({ name }) => (
                                        <Chip key={name} size="small" label={name} className={classes.chip}></Chip>
                                    )) : '' : ''}
                                    {favourites[place] ? favourites[place].address && (
                                        <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
                                            <LocationOnIcon />{favourites[place].address}
                                        </Typography>
                                    ) : ''}
                                    {favourites[place] ? favourites[place].phone && (
                                        <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
                                            <PhoneIcon />{favourites[place].phone}
                                        </Typography>
                                    ) : ''}
                                    <CardActions>
                                        <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
                                            Website
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Grid>
        </div >
    )
}
export default Favourites;