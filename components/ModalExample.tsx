import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";
import { styleModal } from "../styles/styles";
import React, { useState } from "react";

const ModalExample = (): React.JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);
   
    return (
      <View style={styleModal.centeredView}>
        <Pressable
          style={[styleModal.button, styleModal.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styleModal.textStyle}>Show Modal</Text>
        </Pressable>
   
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styleModal.modalView}>
            <Text style={styleModal.modalText}>Hello React-Native</Text>
            <Pressable
              style={[styleModal.button, styleModal.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styleModal.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    );
  };
   
  export default ModalExample;

const styles = StyleSheet.create({});
