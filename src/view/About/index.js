import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View ,Button} from "react-native";

class ModalExample extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>


              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight

        >
          <Button          onPress={() => {
            this.setModalVisible(true);
          }} title='我的  Show Modal'></Button>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ModalExample;