import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'

const App = ():React.JSX.Element => {
  return (
    <View>
      <Text>App</Text>
      <ProfileScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})