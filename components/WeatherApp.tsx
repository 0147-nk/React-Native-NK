import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import React from 'react';
import { styleModalPractice, styleModal } from '../styles/styles';
import { useState } from 'react';
import WeatherBangkok from './WeatherBangkok';
import WeatherLondon from './WeatherLondon';

const WeatherApp = (): React.JSX.Element => {
    const [LondonVisible, setLondonVisible] = useState(false);
    const [BangkokVisible, setBangkokVisible] = useState(false);
    
    return (
      <View style={styleModal.centeredView}>
        <Text style={styleModalPractice.title}>Weather App</Text>
        <Pressable
          style={[styleModalPractice.button, styleModal.buttonOpen]}
          onPress={() => setLondonVisible(true)}
        >
          <Text style={styleModalPractice.buttonText}>London</Text>
        </Pressable>

        <Pressable
          style={[styleModalPractice.button, styleModal.buttonOpen]}
          onPress={() => setBangkokVisible(true)}
        >
          <Text style={styleModalPractice.buttonText}>Bangkok</Text>
        </Pressable>
   
        <Modal
          animationType="slide"
          transparent={true}
          visible={LondonVisible}
          onRequestClose={() => setLondonVisible(!LondonVisible)}
        >
          <View style={styleModalPractice.modalContainer}>
            {/* <Text style={styleModal.modalText}>Hello London</Text> */}
            <WeatherLondon/>
            <Pressable
              style={[styleModalPractice.button, styleModalPractice.closeButton]}
              onPress={() => setLondonVisible(!LondonVisible)}
            >
              <Text style={styleModalPractice.buttonText}>Hide Modal</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={BangkokVisible}
          onRequestClose={() => setBangkokVisible(!BangkokVisible)}
        >
          <View style={styleModalPractice.modalContainer}>
            {/* <Text style={styleModal.modalText}>Hello Bangkok</Text> */}
            <WeatherBangkok/>
            <Pressable
              style={[styleModalPractice.button, styleModalPractice.closeButton]}
              onPress={() => setBangkokVisible(!BangkokVisible)}
            >
              <Text style={styleModalPractice.buttonText}>Hide Modal</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    );
  };
   
export default WeatherApp;

const styles = StyleSheet.create({})