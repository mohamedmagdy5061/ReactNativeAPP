import { useState, useEffect } from 'react';
import { searchApi } from '../api/yelp';



export default () => {

    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const search = async (searchTrem) => {
        searchTrem =  searchTrem.nativeEvent ? searchTrem.nativeEvent.text : searchTrem
        // console.log(searchTrem.nativeEvent.text,'searchTrem>')

       console.log(searchTrem)

        try {     
            const data =  await searchApi(searchTrem)
            console.log(data.businesses,">>>>>>>>>>>>>>>>>")
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