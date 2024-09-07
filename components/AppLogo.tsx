import { View, Text, Image } from 'react-native'
import React from 'react'
import {logoStyle} from "../styles/styleScreen";


const AppLogo = () => {
  return (
    <View>
      <Image source={require('../assets/tni_logo.png')}
      resizeMode='cover'
      style={logoStyle.logo}/>
    </View>
  )
}

export default AppLogo