import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample'


const App = ():React.JSX.Element => {

  return (
    <View>
      <Text>App</Text>
      <ProfileScreen/>
      {/* <UseEffectExample/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})