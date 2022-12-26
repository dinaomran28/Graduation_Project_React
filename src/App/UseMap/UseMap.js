import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api';
import AddFavourite from './components/Favourite/AddFavourite';
import Favourites from './components/Favourite/Favourites';


const UseMap = () => {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [bounds, setBounds] = useState({});
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('0');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating);

        setFilteredPlaces(filteredPlaces);
    }, [rating, places])

    useEffect(() => {
        if (bounds.sw && bounds.ne) {
            setIsLoading(true);
            getPlacesData(type, bounds.ne, bounds.sw).then((data) => {
                console.log(data);
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                setFilteredPlaces([]);
                setRating('0');
                setIsLoading(false);
            })
        }
    }, [type, bounds]);

    const handleFavouriteClick = (place) => {
        if (!favourites.includes(place)) {
            const newFavouriteList = [...favourites, place];
            setFavourites(newFavouriteList);
        }
    }

    const handleRemoveItem = (e) => {
        const name = favourites[e].name;
        setFavourites(favourites.filter(place => place.name !== name));
    }

    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                        AddFavourite={AddFavourite}
                        handleFavouriteClick={handleFavouriteClick}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
            <Favourites favourites={favourites} handleRemoveItem={handleRemoveItem} />
        </>
    );
}

export default UseMap;
