import React from 'react'
import { Button, Modal, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types'

const ModalMobile = props => {
    const { item, title, body, actionTitle,modalVisible,closeModal, onHandlerModal } = props;

  const handlerOnPres = (id) =>{
    closeModal()
    onHandlerModal(id);
  };

  return (
    <Modal
      transparent={true}
      animationType='slide'
      visible={modalVisible}>
    <View style={styles.modalCentered}>
      <View style={styles.modalView}>
     <View style={styles.modalTitle}>
      <Text style={styles.titleText}>{title}</Text><Text style={styles.titleText} onPress={closeModal}>X</Text>
    </View>
    <View style={styles.modalBody}>
      <View>
        <Text>{body}</Text>
      </View>
      <View>
        <Text>{item.value}</Text>
      </View>
      </View>
      <View style={styles.modalButton}>
        <Text>
          <Button title={actionTitle} onPress={()=>handlerOnPres(item.id)} />
        </Text>  
      </View>
    </View>
    </View>
  </Modal>
  )
}

Modal.propTypes = {}

const styles = StyleSheet.create({
    modalCentered: {
      flex:1, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalView: {
      borderWidth: 1,
      borderRadius: 20,
      width: 200,
      height: 200,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: "hidden",
    },
    modalTitle: {
      flex:2,
      backgroundColor: '#2196f3',
      width: '100%',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row', 
    },
    modalBody: {
      flex:8,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    titleText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15
    },
    modalButton: {
      flex:2,
      paddingBottom: 15,
      flexDirection: 'row',
    }
});

export default ModalMobile