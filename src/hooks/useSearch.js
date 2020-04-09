import { useState, useEffect } from 'react';
import { searchApi } from '../api/yelp';



export default () => {

    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const search = async (searchTrem) => {
        searchTrem =  searchTrem.nativeEvent ? searchTrem.nativeEvent.text : searchTrem
        try {     
            const data =  await searchApi(searchTrem)
            setRestaurants(data.businesses)
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }

    useEffect(() => {
        search ('pasta')
    }, [])

    return [search, restaurants, errorMessage]
}