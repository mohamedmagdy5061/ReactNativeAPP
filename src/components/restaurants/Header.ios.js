import React  from 'react'

import { Text } from 'react-native'

import HeaderStyle from '../../styles/HeaderStyles'


const  Header = () => {
    return (
        <Text style={HeaderStyle.iOSHeader}>
            Restaurants
        </Text>
    )
}

export default Header
